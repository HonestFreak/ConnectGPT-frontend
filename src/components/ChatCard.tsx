const chattitle  = [
  "Let's create your first ConnectGPT bot",

]

const chatleft  = [
  "▶️"]

const ChatCard = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-1">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
      🏫 ConnectGPT Hub
      </h4>

      <div> 

        {chattitle.map((title,index) => (
        <div className="cursor-pointer flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >

          <div className="flex flex-1 items-center justify-between">
          
            <div className="w-full">
            <details> 
              <summary className="font-medium text-black dark:text-white">         
                {title} 
              </summary>
              <p>
              
              <div className="p-5 mx-auto align-center">
              <iframe className="w-full " height='250px' src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=oSa1YAjxUKt1ncwB" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>            
               
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
