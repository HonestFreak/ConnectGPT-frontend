import { useState } from "react";
import { useEffect } from "react";
import { CirclePicker } from 'react-color';
import CodeBlock from "./codeblock";
import FloatingButton from "../../components/Pop";

const Integrate = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [currentbot, setcurrentbot] = useState(0);
  const [title, setTitle] = useState("");
  const [uitype, setuitype] = useState('1');
  const [color, setcolor] = useState('#fff');
  const [icon, seticon] = useState(1);
  const [greetings, setGreetings] = useState("");
  const accessToken = localStorage.getItem('accessToken');

  const colorchange = async (color, event) => {
    console.log(color.hex);
    setcolor(color.hex)
  }

  const uichange = async (e) => {
    console.log("Ui Type changed");
    await setuitype(e.target.value)
    console.log(e.target.value)
  }

  const botchange = async (e) => {
    console.log("Bot changed");
    await setcurrentbot(e.target.selectedIndex)
    console.log(e.target.selectedIndex)
  }

  const titlechange = async (e) => {
    await setTitle(e.target.value)
    console.log(e.target.value)
  }

  const greetingChange = async (e) => {
    await setGreetings("&greetings=" + e.target.value)
    console.log(e.target.value)
  }

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/users/userinfo`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      setUserInfo(data)
      console.log(data);
      if ((data.bots).length == 0) window.location.href = "/addbot";
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (userInfo != null)
    return (
      <>
      <h2 className="text-3xl font-semibold text-black dark:text-white p-3">🛠️ Configure</h2>
        <div className="border-stroke py-4 px-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white p-3">
            Bot Name
          </h3>
          <select name='bot' value={currentbot} onChange={botchange}
            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
            {userInfo["bots"].map((item, index) => (
              <option name={item.name} key={index} value={index}>
                {item.id} | {item.name}</option>
            ))}
          </select>

          <h3 className="font-medium text-black dark:text-white p-3">
            UI Theme
          </h3>
          <select name='uitype' value={uitype} onChange={uichange}
            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
            <option name="basic" value="1">Basic</option>
            <option name="dark" value="2">Dark</option>
          </select>
        
        <div className="flex">
          <div className="w-full pr-10">
          <h3 className="font-medium text-black dark:text-white p-3">
            Title
          </h3>
          <input
            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            value={title}
            onChange={titlechange}
            id="title"
            name='title'
          /></div>

            <div className="w-full ">
          <h3 className="font-medium text-black dark:text-white p-3">
            Greeting Message
          </h3>
          <input
            className="w-full rounded border border-stroke bg-gray py-3  text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            onChange={greetingChange}
            id="greetings"
            name='greetings'
          />
        </div></div>
        </div>

        <hr className="mt-5 mb-5 border-stroke dark:border-strokedark" />

        <h2 className="text-3xl font-semibold text-black dark:text-white p-3">🖼️ Integrate</h2>

      <div className="p-5">
        <h3 className="font-medium text-black dark:text-white p-3">
          Chatbot URL
        </h3>

        <div className="flex relative w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
          <button className='bg-success px-2 py-2 rounded-md text-white' onClick={() => navigator.clipboard.writeText(`https://connectgpt.tech/ui/${uitype}?bot_id=${currentbot}&title=${title}${greetings}`)}>Copy</button>
          <div className="px-3 py-2">{`https://connectgpt.tech/ui/${uitype}?bot_id=${currentbot}&title=${title}${greetings}`}</div>
        </div>

        <h3 className="font-medium text-black dark:text-white p-3">
          JSX Component Builder
        </h3>

       
        <div className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
         
        <div className="px-5 py-3 pb-10 rounded-md">
        <h3 className="text-sm text-black dark:text-white p-3">
            Floating Button Icon
          </h3>
          <div className="flex space-x-4">
            <button value="1" onClick={() => seticon(1)} className="px-4 py-4 rounded-full w-20 h-20 shadow-lg hover:bg-success"> <img src="https://connectgpt.tech/images/svg/one.svg" /></button>
            <button value="2" onClick={() => seticon(2)} className="px-2 py-2 rounded-full w-20 h-20 shadow-lg hover:bg-success"> <img src="https://connectgpt.tech/images/svg/two.svg" /> </button>
            <button value="3" onClick={() => seticon(3)} className="px-4 py-4 rounded-full w-20 h-20 shadow-lg hover:bg-success"> <img src="https://connectgpt.tech/images/svg/three.svg" /> </button>
            <button value="4" onClick={() => seticon(4)} className="px-4 py-4 rounded-full w-20 h-20 shadow-lg hover:bg-success"> <img src="https://connectgpt.tech/images/svg/four.svg" /> </button>
            <button value="5" onClick={() => seticon(5)} className="px-4 py-4 rounded-full w-20 h-20 shadow-lg hover:bg-success"> <img src="http://localhost:8080/images/svg/five.svg" /> </button>
            <button value="6" onClick={() => seticon(6)} className="px-4 py-2 rounded-full w-20 h-20 shadow-lg hover:bg-success"> <img src="http://localhost:8080/images/svg/six.svg" /> </button>
          </div>

          <h3 className="text-sm text-black dark:text-white p-3">
            Floating Button Background
          </h3>
          <CirclePicker width="100%" onChange={colorchange} className="px-4" />
          </div>

         
          <FloatingButton bgcolor={color} icon={icon} uitype={uitype} currentbot={userInfo.bots[currentbot]['id']} title={title} greetings={greetings} />
          <CodeBlock botid={userInfo.bots[currentbot]['id']} bgcolor={color} icon={icon} uitype={uitype} title={title} greetings={greetings} />
        </div>

        </div>
      </>
    )
  else {
    return (
      <div class='flex space-x-2 justify-center items-center h-screen'>
        <div class='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s]'>
          🔴
        </div>
        <div class='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s]'>
          🟡
        </div>
        <div class='h-8 w-8 rounded-full animate-bounce'>
          🔵
        </div>
      </div>
    )
  }
};

export default Integrate;
