// Valor 1: Questões de estrela;
// Valor 2: Questões que tem os rádios fixos de 1 até 10;
// Valor 3: Questões de texto;
// Valor 4: Questões de seleção única, do tipo select;
// Valor 5: Questões de seleção única, do tipo radio;
// Valor 6: Questões de seleção múltipla;

import { PropsItens } from "@/hooks/useSatisfactionSurvey";
import { Key } from "react";

interface PropsInputs{
  type: number;
  data: PropsItens;
}

export function CustomInputs({type,data}:PropsInputs) {
  const {itens,horizontal,content,mandatory}=data

  const inAwait= <span>em espera</span>
  const textArea= <textarea placeholder="Digite aqui ..." />
  const select= 
  <select className="h-min">
    <option value="" disabled selected>{content}</option>
    {itens?.map((item, index) => type === 4 ? 
    <option key={index} value={item.value}>{item.description}</option> : null)}
  </select>

  function  radioOrCheckbox(type:number, list:any) {
    const itens = type===2 ? [1,2,3,4,5,6,7,8,9,10] : list

    return(
      <div className={`flex gap-3 ${horizontal || type ===2 ? 'flex-row':'flex-col'} ${type ===2 ? ' justify-between':''}`}>
        {itens?.map((item: { value: any; description: any; }, index: Key) =>
        <label key={index} className={`flex items-center ${type===2? "flex-col gap-2":'gap-1.5'}`}>
          <input 
            type={type==6?"checkbox":'radio'} 
            name="question" 
            value={item.value || item} 
          />
          <span >{item.description || item}</span>
        </label>)}
      </div>
    )
  }


  const typeQuestionComponent:any={
    1: inAwait,
    2: radioOrCheckbox(type,data.itens),
    3: textArea,
    4: select,
    5: radioOrCheckbox(type,data.itens),
    6: radioOrCheckbox(type,data.itens),
  }

  return(
    <div >
      {type===4 ? null: 
        <p className=" mb-2">
          {content}  {mandatory?"":<span className=" text-[#737A86]">{'(opcional)'}</span>}
        </p>
      }
      {typeQuestionComponent[type]}
    </div>
  )
}