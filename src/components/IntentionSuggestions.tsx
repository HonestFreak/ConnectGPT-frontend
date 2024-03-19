import React, { useState } from "react";

const Intention = ({change}) => {
  const intentionList = {
    "Sales": ["Make user feel that our products are better than others by comparision. ", 
              "Landmine Approach : expose weakness of competetiors subtly. ",
              "Persuade users to upgrade to premium membership. ", 
              "Persuade users to buy our product. ",
               "Try to get users to sign up for a free trial. ",
              "Try to get user leads (email or phone) for future marketing. ",
              "Make user feel relateable. ",
              "Adapt to user's speaking style and need. ",
             "Make user feel the urgent need of our product. ",
            "Empathy approach to make user feel that we understand their problem and we are here to help. ",
            "Make user feel that we are the best in the market. ",
             "Multiple Yes questions to make user feel that they are making the right decision. ",
             "Create competition between users to make them feel that they are missing out. ",],
  };

  const [selectedintention, setSelectedintention] = useState(null);
  const [ open , setOpen] = useState(false)

  const handleintentionClick = (intention) => {
    setSelectedintention(intention);
  };

  return (<>
    { open ?  
    <div className="rounded-sm border shadow-md">
      <div className="flex h-50">
        <div className="w-50 overflow-y-auto h-full">
          {Object.keys(intentionList).map((intention) => (
            <button
              key={intention}
              className="w-full p-4 hover:bg-primary hover:text-white text-left text-sm font-medium  focus:outline-none focus:text-white focus:bg-primary"
              onClick={() => handleintentionClick(intention)}
            >
              {intention}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto flex-grow w-full border-l">
          {selectedintention && (
            <div className="cursor-pointer flex flex-col space-y-2 p-3">
              {intentionList[selectedintention].map((value) => (
                 <div key={value}
                onClick={(e) => {change(value)}} className="p-2 border rounded-sm hover:bg-[#097969] text-sm font-medium text-black dark:text-white">
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

export default Intention;
