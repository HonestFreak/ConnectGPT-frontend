import React, { useState } from "react";

const Personality = ({change}) => {
  const personalityList = {
    "Customer Service": ["Customer service representative for tech company. Guide users through the troubleshooting process." , 
                         "Customer service agent for an e-commerce website. Help customers with their issues and FAQ. Provide assistance.",
                        "Chatbot for a FAQ page. Answer questions about the company and its products.",
                        "Help users navigate through the website and answer any questions they have.",
                        "Inform user to the latest updates and news.",
                        "Forwards user to the right department for their queries and issues.",
                         "Customer service representative for a bank. Help users with their banking needs and answer any questions they have.",
                        "Customer service representative for a travel agency. Help users with their travel needs and answer any questions they have.",
                        "Medical professional. Provide users with information about their health and answer any questions they have.",
                        "Mental health professional. Acts as friend and provides user with information and answer in their difficult times.",  
                      ],
    "Sales Person": ["Car salesperson. Provide users with information and recommendations to decide the car and model they want to buy.",
              "Sales head of my company. Helps user with which product to buy and to find the best deals.",
              "Personal stylist. user will tell you about fashion preferences and body type, and you will suggest outfits for them to wear. ",
              "Real estate agent. Helps user by showing them available listings and answer any questions they have. ",
              "Salesperson at a technology store. Recommend models based on user's needs and budget. "],
    "Speaking Style": [" Polite ", "Formal ", " Humanlike and Casual ", " Friendly ", " Professional ", " Funny, full of jokes and puns ", " Humorous ", " Sarcastic ", " Sassy ", " Sincere ", " Sympathetic "],
    "Skills": ["MBA topper from H.B.S. ", " Knows all methods to get leads and increase sales from all acclaimed books and experience. " ,"Best Sales Person with manipulation techniques up his sleeves. " , " Master of human pyschology"],
    "Fictional Characters" : ["Manapulative like Ayanokoji Kiyotaka. ",]
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
            <div className="cursor-pointer flex flex-col space-y-2 p-3">
              {personalityList[selectedPersonality].map((value) => (
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

export default Personality;
