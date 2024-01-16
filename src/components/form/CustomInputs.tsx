// Valor 1: Questões de estrela;
// Valor 2: Questões que tem os rádios fixos de 1 até 10;
// Valor 3: Questões de texto;
// Valor 4: Questões de seleção única, do tipo select;
// Valor 5: Questões de seleção única, do tipo radio;
// Valor 6: Questões de seleção múltipla;

import { PropsGET, PropsItens } from "@/hooks/useSatisfactionSurvey";
import { Dispatch, SetStateAction } from "react";

import { StarRating } from "./inputTypes/StarRating";
import { RadioInput } from "./inputTypes/RadioInut";
import { CheckboxInput } from "./inputTypes/CheckboxInput";
import { SelectInput, TextArea } from "./inputTypes/textAreaAndSelectInput";

interface PropsInputs {
  index: number;
  type: number;
  data: PropsItens;
  setData: Dispatch<SetStateAction<PropsGET>>;
  title: string;
}

export function CustomInputs({ index, type, data, setData, title }: PropsInputs) {
  const { itens, horizontal, content, mandatory, answerValue } = data

  const handleInputChangeDynamic = (value: string | number | number[]) => {
    setData((prevData) => {
      const newData = [...prevData.itens];
      newData[index] = { ...newData[index], answerValue: value };
      return { ...prevData, itens: newData };
    });
  };

  const inputsProps={
    horizontal,
    index,
    type,
    itens,
    content,
    mandatory,
    answerValue,
    handleInputChangeDynamic,
  }

  const typeQuestionComponent: any = {
    1: <StarRating {...inputsProps}/>,
    2: <RadioInput {...inputsProps}/>,
    3: <TextArea {...inputsProps}/>,
    4: <SelectInput {...inputsProps}/>,
    5: <RadioInput {...inputsProps}/>,
    6: <CheckboxInput {...inputsProps}/>
  }

  return (
    <div >
      {type === 1 || type === 2 ? <h1>{title}</h1> : null}
      {type === 4 ? null :
        <p className=" mb-2">
          {content}  {mandatory ? "" : <span className=" text-gray-500">{'(opcional)'}</span>}
        </p>
      }
      {typeQuestionComponent[type]}
    </div>
  )
}