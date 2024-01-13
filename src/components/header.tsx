import Image from 'next/image'
import logo from "../../public/assets/SUA LOGO.svg";
import iconMenu from "../../public/assets/Icon/regular.svg";

export function Header() {
  return(
    <header>
      <div className="w-[1440px] h-[72px] px-4 sm:px-8 py-4 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-4 flex">
          <button className='not-sr-only bg-inherit shadow-none'>
            <Image src={iconMenu} alt="SUA LOGO" />
          </button>
          <a href="/">
            <Image src={logo} alt="SUA LOGO" />
          </a>
        </div>
        <div className="justify-start items-center gap-4 flex">
            <div className=" h-10 w-10 bg-gray-700 rounded-full text-center text-slate-100 text-lg font-semibold flex justify-center items-center">
              F
            </div>
            <div className="text-right text-slate-100 text-xs font-semibold leading-[18px]">Fábio C Pinto</div>
            <div className=" text-center text-slate-100 text-lg font-semibold flex justify-center items-center">
              {">"}
            </div>
        </div>
      </div>
    </header>
  )
}