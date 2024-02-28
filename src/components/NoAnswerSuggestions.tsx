import React, { useState } from "react";

const NoAnswer = ({change}) => {
  const noAnswerList = {
    "Characters": ["Ayanokoji", "Skamoto", ],
    "Marketing": ["Person who is  at marketing", "Person who is good at marketing"],
    "Sales": ["Person who is  at sales", "Person who is good at sales"],
    "Finance": ["Person who is  at finance", "Person who is good at finance"],
    "HR": ["Person who is  at HR", "Person who is good at HR"],
    "Documentation": ["Person who is  at documentation", "Person who is good at documentation"],
  };

  const [selectednoAnswer, setSelectednoAnswer] = useState(null);
  const [ open , setOpen] = useState(false)

  const handlenoAnswerClick = (noAnswer) => {
    setSelectednoAnswer(noAnswer);
  };

  return (<>
    { open ?  
    <div className="rounded-sm border shadow-md">
      <div className="flex h-50">
        <div className="w-50 overflow-y-auto h-full">
          {Object.keys(noAnswerList).map((noAnswer) => (
            <button
              key={noAnswer}
              className="w-full p-4 hover:bg-primary hover:text-white text-left text-sm font-medium  focus:outline-none focus:text-white focus:bg-primary"
              onClick={() => handlenoAnswerClick(noAnswer)}
            >
              {noAnswer}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto flex-grow w-full border-l">
          {selectednoAnswer && (
            <div className="flex flex-col space-y-2 p-3">
              {noAnswerList[selectednoAnswer].map((value) => (
                 <div key={value}
                onClick={(e) => {change(value)}} className="p-2 border rounded-sm hover:bg-success text-sm font-medium text-black dark:text-white">
                  + {value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div> :
    <> <button className="text-sm p-3" onClick={() => {setOpen(true)}}> ✨ Get Suggestions </button> </>
    }
    </>
  );
};

export default NoAnswer;
