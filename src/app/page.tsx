'use client'
import { Header } from "@/components/header";
import { CardBase } from "@/components/satisfactionSurvey/cardBase";
import { useSatisfactionSurvey } from "@/hooks/useSatisfactionSurvey";

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
      <div className="w-full px-8 py-4 bg-gray-900 h-[244px]">
        <small className=" text-gray-500">pesquisa de satisfação</small>
      </div>
      <div className=" -mt-48">
        <CardBase data={data} setData={setData} handleSendPost={handleSendPost}/>
      </div>
    </main>

    <hr className=" mt-8"/>
    <footer className="p-8">
      teste footer
    </footer>
    </>
  )
}
