import { Key } from "react";

export const CheckboxInput = ({horizontal,type,itens,answerValue,handleInputChangeDynamic}:any) => {
  return (
    <div
      className={`flex flex-wrap gap-3 ${horizontal || type === 2 ? 'flex-row' : 'flex-col'} ${type === 2 ? ' justify-between mt-9' : ''}`}
    >
      {itens?.map((item: { value: number; description: string }, index: Key ) => {
        return (
          <label
            key={index}
            className={`flex items-center gap-1.5 cursor-pointer
            ${horizontal ? 'px-4 py-2 rounded-full border border-gray-400 hover:border-yellow-400' : ''}
            ${horizontal && Array.isArray(answerValue) && answerValue.includes(item.value) ? 'bg-yellow-400 border-yellow-400' : ''}
          `}
          >
            <input
              type="checkbox"
              name={`question-${index}`}
              value={item.value}
              className={`${horizontal ? 'hidden' : ''}`}
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
            <span className=" selection:bg-transparent">{item.description}</span>
          </label>
        );
      })}
    </div>
  )
}