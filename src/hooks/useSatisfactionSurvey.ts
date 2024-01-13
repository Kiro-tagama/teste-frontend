'use client'
import { useState, useEffect } from "react";
import axios from "axios";

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

  function handleValidationData(){}

  function handleSendPost(props:any){
    props.preventDefault();
    console.log(data);
  }

  function handleSendError(){}
  function handleSendSuccess(){}

  return{
    data,setData,
    handleSendPost,
    handleSendError,
    handleSendSuccess
  }
}