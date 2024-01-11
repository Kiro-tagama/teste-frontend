'use client'

import { useState, useEffect } from "react";
import Axios from "axios";

export interface PropsItens{
	typeQuestion : number
	answerValue? : number|string
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
  const [data,setData]= useState<PropsGET | null>(
    {
      "itens":[
          {
              "typeQuestion":1,
              "answerValue":5,
              "mandatory":true,
              "content":"Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário"
          },
          {
              "typeQuestion":2,
              "answerValue":9,
              "mandatory":true,
              "content":"Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário"
          },
          {
              "typeQuestion":3,
              "mandatory":false,
              "content":"Descreva o motivo de sua avaliação"
          },
          {
              "typeQuestion":4,   
              "content":"Qual loja você frequenta?",
              "mandatory":true,
              "itens": [
                  {
                      "value":0,
                      "description":"Opção 1"
                  },
                  {
                      "value":1,
                      "description":"Opção 2"
                  },
                  {
                      "value":2,
                      "description":"Opção 3"
                  }
              ]
          },
          {
              "typeQuestion":5,   
              "content":"Pergunta de escolha única?",
              "mandatory":true,
        "answerValue": 1,
               "itens": [
                  {
                      "value":0,
                      "description":"Sim"
                  },
                  {
                      "value":1,
                      "description":"Não"
                  }              
              ]
          },
           {
              "typeQuestion":6,   
              "horizontal":true,
              "content":"Pergunta de múltipla escolha?",
              "mandatory":true,
               "itens": [
                  {
                      "value":0,
                      "description":"Opção 1"
                  },
                  {
                      "value":1,
                      "description":"Opção 2"
                  },
                  {
                      "value":2,
                      "description":"Opção 3"
                  },
                  {
                      "value":3,
                      "description":"Opção 4"
                  }
              ]
          },
           {
              "typeQuestion":6,   
              "horizontal":false,
              "mandatory":true,
              "content":"Pergunta de múltipla escolha?",
               "itens": [
                  {
                      "value":0,
                      "description":"Opção 1"
                  },
                  {
                      "value":1,
                      "description":"Opção 2"
                  },
                  {
                      "value":2,
                      "description":"Opção 3"
                  }             
              ]
          },
          {
              "typeQuestion":3,
              "answerValue":"Exemplo de resposta",
              "mandatory":false,
              "content":"Pergunta de texto?"
          }
      ],
      "error":"",
      "warning":""
    }
  )

  // useEffect(()=>{
  //   async ()=> await Axios.get(urls.get)
  //   .then(res=> setData(res.data))
  // },[])

  function handleValidationData(){}
  function handleSendPost(){}
  function handleSendError() {}
  function handleSendSuccess() {}

  return{
    data
  }
}