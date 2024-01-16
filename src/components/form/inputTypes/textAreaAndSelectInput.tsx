import { Key } from "react";

export function TextArea({answerValue,handleInputChangeDynamic}:any){ 
  const lengthText = answerValue? answerValue.length : '0'
  const lengthMax = 250

  return(
  <>
  <textarea
    placeholder="Digite aqui ..."
    maxLength={lengthMax}
    value={typeof answerValue == 'string' ? answerValue : ''}
    onChange={(e) => handleInputChangeDynamic(e.target.value)} />
    <p className="text-right h-0 text-sm text-gray-400">{lengthText} / {lengthMax}</p> 
  </>
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