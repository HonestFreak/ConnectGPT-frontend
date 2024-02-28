import React, { useState } from "react";

const Personality = ({change}) => {
  const personalityList = {
    "Characters": ["Ayanokoji", "Skamoto", ],
    "Marketing": ["Person who is  at marketing", "Person who is good at marketing"],
    "Sales": ["Person who is  at sales", "Person who is good at sales"],
    "Finance": ["Person who is  at finance", "Person who is good at finance"],
    "HR": ["Person who is  at HR", "Person who is good at HR"],
    "Documentation": ["Person who is  at documentation", "Person who is good at documentation"],
  };

  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [ open , setOpen] = useState(false)

  const handlePersonalityClick = (personality) => {
    setSelectedPersonality(personality);
  };

  return (<>
    { open ?  
    <div className="rounded-sm border shadow-md">
      <div className="flex h-50">
        <div className="w-50 overflow-y-auto h-full">
          {Object.keys(personalityList).map((personality) => (
            <button
              key={personality}
              className="w-full p-4 hover:bg-primary hover:text-white text-left text-sm font-medium  focus:outline-none focus:text-white focus:bg-primary"
              onClick={() => handlePersonalityClick(personality)}
            >
              {personality}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto flex-grow w-full border-l">
          {selectedPersonality && (
            <div className="flex flex-col space-y-2 p-3">
              {personalityList[selectedPersonality].map((value) => (
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

export default Personality;
