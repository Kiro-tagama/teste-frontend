'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastMsg } from "@/components/ToastMsg";

export interface PropsItens{
	typeQuestion : number
	answerValue? : number|string| number[]
	mandatory : boolean
	content : string
	horizontal? : boolean
	itens?: {
		value: number
		description?:string
	}[]
}

interface PropsMessage{
	error:string
	warning:string
}

export interface PropsGET extends PropsMessage{
	itens: PropsItens[]
}

const urls={
  get:"https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json",
  post:"https://jsonplaceholder.typicode.com/posts/",
  error:"https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json",
  success:"https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json"
}

export function useSatisfactionSurvey() {
  // data == list of questions
  const [data,setData]= useState<any | null>(null)
  
  function getData() {
    axios.get(urls.get)
    .then((res) => {
      setData(res.data)      
    })
    .catch((error) => {console.log(error)});
  }

  useEffect(()=>{
    getData()
  },[])

  function handleValidationData(){  
    for (const item of data.itens) {
      if (item.mandatory && (item.answerValue === undefined || item.answerValue.length == 0) ) {
        return false
      }
    }
    return true
  }

  function handleSendPost(props:any){
    props.preventDefault(); // impede do form restartar

    const valid = handleValidationData()
    console.log(valid);
    console.log(data);
    
    !valid?
      toast.warning(ToastMsg({
        type:"warning",
        title:"Ops!",
        text:"Acho que esqueceu algo, os campos obrigatórios devem ser preenchidos"
      })):
      axios.post(urls.post,data)
      .then(()=>
        toast.success(ToastMsg({
          type:"success",
          title:"Tudo certo!",
          text:"Suas alterações foram salvas com sucesso!"
        }))
      )
      .catch(()=>
        toast.error(ToastMsg({
          type:"error",
          title:"Algo deu errado",
          text:"Tente novamente em alguns instantes"
        }))
      )
  }

  function handleSendError(){
    axios.get(urls.error,data)
      .then((res)=>
        toast.error(ToastMsg({
          type:"error",
          title:"Teste de Erro",
          text:res.data.error
        }))
      )
      .catch((err)=>
        toast.error(ToastMsg({
          type:"error",
          title:"Algo deu errado",
          text:"Tente novamente em alguns instantes"
        }))
      )
  }
  function handleSendSuccess(){
    axios.get(urls.success,data)
      .then((res)=>
        toast.success(ToastMsg({
          type:"success",
          title:"Teste de Sucesso",
          text:res.data.error
        }))
      )
      .catch((err)=>
        
        toast.error(ToastMsg({
          type:"error",
          title:"Algo deu errado",
          text:"Tente novamente em alguns instantes"
        }))
      )
  }

  return{
    data,setData,
    handleSendPost,
    handleSendError,
    handleSendSuccess
  }
}