import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UI = () => {
  const [searchParams] = useSearchParams();
  const answer = searchParams.get("title");
  const [isloading, setIsLoading] = useState(false);

  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [ipAddress, setIpAddress] = useState("");
  const [date] = useState(String(Date.now()))

  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
      console.log(data.ip);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      const newMessage = String(query);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: newMessage, sender: "user" }, // Identify the sender as "bot"
      ]);
      sendApiRequest();
      setQuery("");
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const sendApiRequest = async () => {
    try {
      const response = await fetch(`api/chat/query/${searchParams.get("bot_id")}?query=${query}
                        &convo_id=${String(ipAddress) + String(date)}`);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      // Process the API response data here
      console.log("API response:", data);
      const newMessage = String(data);
      setIsLoading(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: newMessage, sender: "bot" }, // Identify the sender as "bot"
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchIpAddress();
  }, []);

  return (
    <>
      <div style={{ height: "100vh" }} className="bg-black">
        <div className="overflow-y-auto relative space-y-3 py-3 px-3" style={{ height: "90%" }}>
          <div className="py-1 px-1 text-center">{answer} AI Assistant</div>

          <div className="pr-8 text-white rounded-r-xl rounded-tl-xl bg-[#01452c] px-5 py-2 min-w-[10%] max-w-[90%] w-fit">
            😊 hi, I am your 24X7 personal AI assistant. Feel free to ask me any questions.
          </div>

          {messages.map((message, index) => (
            <div className="" key={index}>
              <div className={`${
                  message.sender === "user" ? 
                  "justify-end flex  mb-4" : 
                  "justify-start flex  mb-4"
                }`}>
              <div
                className={`text-white ${
                  message.sender === "user" ? 
                  "bg-primary rounded-l-xl rounded-tr-xl bg-[#01452c]" : 
                  "bg-green rounded-r-xl rounded-tl-xl bg-[#01452c]"
                } px-5 py-2 min-w-[10%] max-w-[90%] w-fit`}
              >
                {message.content}
              </div>
            </div>
            </div>
          ))}
          {isloading && (<p className="text-success"> Typing ... </p>)}
        </div>
        <input
          className="w-full rounded border border-stroke py-3 pl-5 pr-4.5 focus:border-primary focus-visible:outline-none border-strokedark bg-meta-4 text-white focus:border-primary"
          type="text"
          placeholder="Your query here..."
          style={{ height: "10%" }}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </>
  );
};

export default UI;
