'use client'

import { useState, useEffect } from "react";
import Axios from "axios";

interface PropsItens{
	typeQuestion : number
	answerValue? : number
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

interface PropsGET extends PropsMessage{
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
  const [data,setData]= useState<PropsGET | null>(null)

  useEffect(()=>{
    async ()=> await Axios.get(urls.get)
    .then(res=> setData(res.data))
  },[])

  function handleValidationData(){}
  function handleSendPost(){}
  function handleSendError() {}
  function handleSendSuccess() {}

  return{
    data
  }
}