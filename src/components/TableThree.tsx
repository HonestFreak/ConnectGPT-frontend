
import { useState } from "react";
import { useEffect } from "react";

const Chats = () => {
  const [currentbot, setcurrentbot] = useState(0)
  const [userInfo, setUserInfo] = useState(null);
  const [chats, setChats] = useState(JSON.parse("{}"));
  const accessToken = localStorage.getItem('accessToken');

  const fetchUserInfo = async () => {
    try {
      const response = await fetch('connectgpt-backend.azurewebsites.net/users/userinfo'
      ,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const temp = JSON.parse(data.bots[currentbot]["chat_history"])
      setUserInfo(data);
      setChats(temp);
      console.log(chats);
      if((data.bots).length == 0) window.location.href = "/addbot";
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo(); 
  }, []);

  const botchange = async (e) => {
    console.log("Bot changed");
    setcurrentbot(e.target.selectedIndex)
    const temp = JSON.parse(userInfo.bots[e.target.selectedIndex]["chat_history"])
    setChats(temp);
    console.log(e.target.selectedIndex)
  }


  if(!userInfo) return null;
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="border-b  border-stroke py-4 px-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white p-3">
                💬 Chat Sessions
                </h3> 
                <select name='bot' value={currentbot} onChange={botchange}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                
                {userInfo["bots"].map((item, index) => (
                    <option name={item.name} key={index} value={index}>{item.name}</option>
                  ))}
                  </select>
              </div>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Chat Sessions
              </th>
             
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Details
              </th>
              
            </tr>
          </thead>


          <tbody>
          
          
          { Object.entries(chats).map(([chatId, chatData]) => (
            <tr key={chatId}>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <details>
                <summary>
                {chatId} <br/>
                <p className="italic">
                {String(chatData.chats[0]).substring(0,50) + (chatData.chats.length > 50 ? "..." : "")}
                </p>
                </summary>

            
                <p className="text-sm pb-1">
                {chatData.chats && chatData.chats.map((chat, index) => (
                  <p key={index}>💬 {chat}</p>
                    ))}
                </p>
                </details>
                
              </td>
              
              <td className="gap-x-4 border-b border-[#eee] py-5 px-4 dark:border-strokedark inlind-flex">
                <p className="text-sm font-medium text-success space-x-2">
                
                <p className="text-sm text-success inline-flex rounded-full py-1 px-3 bg-opacity-10 bg-success">
                {chatData.chats.length} messages in this chat session</p>
                
                <a href={`https://www.infobyip.com/ip-${chatId.slice(0,-13)}.html`} target="_blank" >
                <p className="text-sm text-success inline-flex rounded-full py-1 px-3 bg-opacity-10 bg-primary">
                {(chatId.slice(0,-13))}
                </p>
                </a>
                </p>

                
              </td>
              
            </tr> ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chats;
