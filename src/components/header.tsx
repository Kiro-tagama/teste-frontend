import Image from 'next/image'
import logo from "../../public/assets/SUA LOGO.svg";
import menuIcon from "../../public/assets/Icon/regular.svg";
import arrowWhiteIcon from "../../public/assets/Icon/arrowWhite.svg";
import { useState } from 'react';

export function Header() {
  const [showAside,setShowAside]=useState(false)
  const [showUserInfo,setShowUserInfo]=useState(false)
  const userName ="Fábio C Pinto"

  const asideComponent =(
    <aside
      onMouseLeave={()=>setShowAside(false)}
      className={`
      bg-gray-900 z-40 fixed h-full top-0 left-0 pt-20 text-slate-100 overflow-hidden transition-all duration-500
      ${showAside? 'w-52':'w-0'}
      `}
    >
      <div className='px-4 sm:px-8 flex flex-col gap-5'>
        <p className='text-slate-100'>sideBar</p>
        <hr />
        {[...Array(5)].map((_,index)=>
          <a key={index} className='text-slate-100 min-w-40'>Option {index}</a>
        )}
      </div>
    </aside>
  )

  const userInfoComponent =(
    <div
      onMouseLeave={()=>setShowUserInfo(false)}
      className={`
      p-8 flex flex-col gap-5 rounded-xl w-64
      bg-gray-900 absolute top-20 -ml-24 text-slate-100  overflow-hidden transition-all duration-500
      ${showUserInfo? 'opacity-100 visible':'opacity-0 invisible'}
      `}
    >
      <p className='text-slate-100'>{userName}</p>
      <hr />
      {[...Array(5)].map((_,index)=>
        <a key={index}>Option {index}</a>
      )}
    </div>
  )

  return (
    <>
    <header>
      <div className="w-[1440px] h-[72px] px-4 sm:px-8 py-4 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-4 flex">
          <button className='not-sr-only bg-inherit shadow-none hover:bg-inherit' onClick={()=>setShowAside(!showAside)}>
            <Image src={menuIcon} alt="menuIcon" />
          </button>
          <a href="/">
            <Image src={logo} alt="SUA LOGO" />
          </a>
        </div>
        <div 
          onClick={()=>setShowUserInfo(!showUserInfo)}
        > 
          <div className="justify-start items-center gap-4 flex cursor-pointer">
            <div className=" h-10 w-10 bg-gray-700 rounded-full text-center text-slate-100 text-lg font-semibold flex justify-center items-center">
              {userName[0]}
            </div>
            <div className="text-right text-slate-100 text-xs font-semibold leading-[18px]">{userName}</div>
            <div className=" text-center text-slate-100 text-lg font-semibold flex justify-center items-center">
              <Image src={arrowWhiteIcon} alt="arrowIcon" className='brightness-200'/>
            </div>
          </div>

          {userInfoComponent}
        </div>
      </div>
    </header>

    {asideComponent}
    </>
  )
}