import { Key } from "react";

export function TextArea({answerValue,handleInputChangeDynamic}:any){ return(
  <textarea
    placeholder="Digite aqui ..."
    value={typeof answerValue == 'string' ? answerValue : ''}
    onChange={(e) => handleInputChangeDynamic(e.target.value)}
  />
);}

export function SelectInput({type,itens,content,answerValue,handleInputChangeDynamic}:any){ return(
  <select className={`h-14 ${!answerValue ? 'text-gray-500' : ''}`}
    defaultValue={'DEFAULT'}
    onChange={(e) => handleInputChangeDynamic(e.target.value)}
  >
    <option value={'DEFAULT'} disabled>{content}</option>
    {itens?.map((item: { value: number ,description: string }, index: Key) => type === 4 ?
      <option key={index} value={item.value}>{item.description}</option> : null)}
  </select>
)}