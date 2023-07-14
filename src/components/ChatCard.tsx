import { Link } from 'react-router-dom';
const chattitle  = [
  "What will be the best subscription plan for my company, we require 200-500 calls everyday.",
  "When will the product be launched , how to join the waitlist? ",
  "What are the pricings for the subscription, is there any free demo? ",
  "What is your service about, how to contact your company for the quote?",
]

const chatreply  = [
  "There are 3 different subscription plans that our company offers, according to the information given by you, the best plan will be ...",
  "The product will be launched in the end week of  ...",
  "There are three types of subscription plans. Yes, there is a free demo of 7 days which you can ...",
  "We provide services using which you can use the power of AI to create customer care , FAQ , lead  ...",
]

const chatleft  = [
  5, 6 , 3, 1 ,10, 4, 19]




const ChatCard = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-1">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
      🔔 ConnectGPT Hub
      </h4>

      <div> 

        {chattitle.map((title,index) => (
        <div className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >

          <div className="flex flex-1 items-center justify-between">
          
            <div>
            <details> 
              <summary className="font-medium text-black dark:text-white">
             
                {title.substring(0,50)} {"..." && title.length > 50}
            
              </summary>
              <p>
                <span className="text-sm text-black dark:text-white">
                 {title} 
                </span>
               
              </p></details> 
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-white">
                {chatleft[index]}
              </span>
            </div>
          </div>
        </div>))}
     
      </div>
    </div>
  );
};

export default ChatCard;
