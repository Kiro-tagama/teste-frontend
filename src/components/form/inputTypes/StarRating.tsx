import { useState } from "react";
import starIcon from "../../../../public/assets/Icon/star.svg";
import Image from "next/image";

export const StarRating = ({answerValue,handleInputChangeDynamic}:any) => {
  const data = typeof answerValue == 'number' ? answerValue - 1 : 0
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