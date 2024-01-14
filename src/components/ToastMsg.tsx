import Image from "next/image";
import checked from "../../public/assets/Icon/checked.svg";
import exclamation from "../../public/assets/Icon/exclamation.svg";
import warning from "../../public/assets/Icon/warning.svg";

interface Props{
  type?:"error"|"success"|"warning"
  title:string
  text:string
}

export function ToastMsg({type, title, text }:Props) {
  const icons={
    "error":exclamation,
    "success":checked,
    "warning":warning,
  }

  const color={
    "error":'bg-red-500 shadow-sm shadow-red-400',
    "success":'bg-green-500 shadow-sm shadow-green-400',
    "warning":'bg-yellow-500 shadow-sm shadow-yellow-400',
  }

  return (
    <div className="flex flex-row items-center gap-6 ">
      {type?
        <div className={` min-w-14 !h-14 !w-14 rounded-full flex justify-center items-center 
        ${type? color[type] : ''}`}>
          <Image src={icons[type]} alt={type}/>
        </div>
      :null}
      <div className=" mr-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 text-sm font-medium">{text}</p>
      </div>
    </div>
  )
}