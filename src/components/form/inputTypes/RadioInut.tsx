export const RadioInput = ({type,itens,index,answerValue,handleInputChangeDynamic}:any) => {
  const list = type !== 2 ? itens : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={`flex flex-wrap gap-3 flex-row
      ${type === 2 ? ' justify-between mt-9' : ''}
    `}>
      {list?.map((item: any, i: number) => {
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
            <span className=" selection:bg-transparent">{item.description || item}</span>
          </label>
        );
      })}
    </div>
  );
};