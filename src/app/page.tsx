'use client'
import { Header } from "@/components/header";
import { CardBase } from "@/components/satisfactionSurvey/cardBase";
import { useSatisfactionSurvey } from "@/hooks/useSatisfactionSurvey";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const {
    data,setData,
    handleSendPost,
    handleSendError,
    handleSendSuccess
  } = useSatisfactionSurvey()
  
  return (
    <>
    <Header />
    <main>
      <div className="w-full px-8 py-4 bg-gray-900 h-[244px] flex justify-center">
        <div className="w-[1440px]  ">
          <small className=" text-gray-500 mx-2 sm:mx-4">pesquisa de satisfação</small>
        </div>
      </div>
      <div className=" -mt-48">
        <CardBase data={data} setData={setData} handleSendPost={handleSendPost}/>
      </div>
    </main>

    <hr className=" mt-8"/>
    <footer className="p-8 flex flex-col items-center">
      <p>Botões adicionais para simular o post do formulário</p>
      <div className="my-2 flex gap-4">
      <button onClick={()=>{handleSendError()}} className='bg-red-600 hover:bg-red-500 shadow-red-600/25 !w-20'>Error</button>
      <button onClick={()=>handleSendSuccess()} className='bg-green-600 hover:bg-green-500 shadow-green-600/25 !w-20'>Success</button>
      </div>
      <p>Obs: o botão Enviar seria o terceiro botão do evento de post citado na documentação</p>
    </footer>

    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      enableMultiContainer
      icon={false}
    />
    </>
  )
}
