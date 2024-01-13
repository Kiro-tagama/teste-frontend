// Valor 1: Questões de estrela;
// Valor 2: Questões que tem os rádios fixos de 1 até 10;
// Valor 3: Questões de texto;
// Valor 4: Questões de seleção única, do tipo select;
// Valor 5: Questões de seleção única, do tipo radio;
// Valor 6: Questões de seleção múltipla;

import { PropsGET, PropsItens } from "@/hooks/useSatisfactionSurvey";
import { Dispatch, SetStateAction, useState } from "react";
import starIcon from "../../../public/assets/Icon/star.svg";
import Image from "next/image";
import { randomUUID } from "crypto";

interface PropsInputs {
  index: number
  type: number;
  data: PropsItens;
  setData: Dispatch<SetStateAction<PropsGET>>;
  primaryTitle: string;
  secondaryTitle: string;
}

export function CustomInputs({
  index, type, data, setData,
  primaryTitle, secondaryTitle
}: PropsInputs) {
  const { itens, horizontal, content, mandatory, answerValue } = data

  const handleInputChangeDynamic = (value: string | number | number[]) => {
    setData((prevData) => {
      const newData = [...prevData.itens];
      newData[index] = { ...newData[index], answerValue: value };
      return { ...prevData, itens: newData };
    });
  };

  const textArea = (
    <textarea
      placeholder="Digite aqui ..."
      value={answerValue || ''}
      onChange={(e) => handleInputChangeDynamic(e.target.value)}
    />
  );

  const starRating = () => {
    const data = answerValue - 1
    const [star, setStar] = useState(data)
    return (
      <div className="flex gap-4 my-4"
        onMouseLeave={() => setStar(data)}
      >
        {[...Array(5)].map((_, index) =>
          <span key={index}
            onMouseEnter={() => setStar(index)}
            onClick={() => handleInputChangeDynamic(index + 1)}
            className={`w-16 h-16 flex justify-center items-center `}>
            <Image src={starIcon} alt="star"
              className={` transition-all ${star < index ? ' saturate-0' : ''}`} />
          </span>
        )}
      </div>
    )
  }

  const select = (
    <select className={`h-14 ${!answerValue ? 'text-gray-500' : ''}`}
      defaultValue={'DEFAULT'}
      onChange={(e) => handleInputChangeDynamic(e.target.value)}
    >
      <option value={'DEFAULT'} disabled>{content}</option>
      {itens?.map((item, index) => type === 4 ?
        <option key={index} value={item.value}>{item.description}</option> : null)}
    </select>
  )

  const renderRadioOptions = () => {
    const list = type !== 2 ? itens : [1,2,3,4,5,6,7,8,9,10]
    
    return (
      <div className={`flex flex-wrap gap-3 flex-row
        ${type === 2 ? ' justify-between mt-9' : ''}
      `}>
        {list?.map((item:any, i: number) => {
          const value = type !== 2 ? item.value : item
          return (
            <label
              key={i}
              className={`flex items-center cursor-pointer ${type === 2 ? 'flex-col gap-2' : 'gap-1.5'}`}
            >
              <input
                type="radio"
                className="cursor-pointer"
                name={`question-${index}`}
                value={value}
                checked={answerValue === value}
                onChange={() => handleInputChangeDynamic(value)} />
              <span>{item.description || item}</span>
            </label>
          );
        })}
      </div>
    );
  };

  const renderCheckboxOptions = (
    <div
      className={`flex flex-wrap gap-3 ${horizontal || type === 2 ? 'flex-row' : 'flex-col'} ${type === 2 ? ' justify-between mt-9' : ''}`}
    >
      {itens?.map((item, index) => {
        return (
          <label
            key={index}
            className={`flex items-center gap-1.5 cursor-pointer
              ${horizontal? 'px-4 py-2 rounded-full border border-gray-400 hover:border-yellow-400':''}
              ${horizontal && Array.isArray(answerValue) && answerValue.includes(item.value) ?'bg-yellow-400 border-yellow-400':''}
            `}
          >
            <input
              type="checkbox"
              name={`question-${index}`}
              value={item.value}
              className={`${horizontal?'hidden':''}`}
              checked={Array.isArray(answerValue) && answerValue.includes(item.value)}
              onChange={() => {
                const value = item.value
                let newSelectedValues;

                if (Array.isArray(answerValue)) {
                  newSelectedValues = answerValue.includes(value)
                    ? answerValue.filter((val) => val !== value)
                    : [...answerValue, value];
                } else {
                  newSelectedValues = [value];
                }

                handleInputChangeDynamic(newSelectedValues);
              }} />
            <span>{item.description}</span>
          </label>
        );
      })}
    </div>
  )


  const typeQuestionComponent: any = {
    1: starRating(),
    2: renderRadioOptions(),
    3: textArea,
    4: select,
    5: renderRadioOptions(),
    6: renderCheckboxOptions,
  }

  return (
    <div >
      {type === 1 ? <h1>{primaryTitle}</h1> : type === 2 ? <h1>{secondaryTitle}</h1> : null}
      {type === 4 ? null :
        <p className=" mb-2">
          {content}  {mandatory ? "" : <span className=" text-gray-500">{'(opcional)'}</span>}
        </p>
      }
      {typeQuestionComponent[type]}
    </div>
  )
}