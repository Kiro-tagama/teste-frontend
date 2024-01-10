import logo from "../../public/assets/SUA LOGO.svg";
import iconMenu from "../../public/assets/Icon/UI/General/menu 2/regular.svg";

export function Header() {
  return(
    <header>
      <div className="w-[1440px] h-[72px] px-8 py-4 bg-gray-900 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-4 flex">
          <img src={iconMenu} alt="SUA LOGO" />
          <img src={logo} alt="SUA LOGO" />
        </div>
        <div className="justify-start items-center gap-4 flex">
            <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute bg-gray-700 rounded-[100px]" />
                <div className="left-[15px] top-[11px] absolute text-center text-slate-100 text-lg font-semibold font-['Poppins'] leading-[18px]">F</div>
            </div>
            <div className="text-right text-slate-100 text-xs font-semibold font-['Poppins'] leading-[18px]">Fábio C Pinto</div>
            <div className="w-6 h-6 relative" />
        </div>
      </div>
    </header>
  )
}