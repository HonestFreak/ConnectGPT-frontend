import { useState } from "react"
import { useEffect } from "react"

const adddoc = () => {
  const [loading , setloading ] = useState(false);
  const [url, setURL] = useState("");
  const [text, setText] = useState("");
  const [currentbot, setcurrentbot] = useState(0)
  const [userInfo, setUserInfo] = useState(null);
  const [pdf, setpdf] = useState("");
  const [sitemap, setsitemap] = useState("");
  const accessToken = localStorage.getItem('accessToken');

  const sitemapmethod = async () => {
    setloading(true)
    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/chat/sitemapmethod/?bot_id=${userInfo["bots"][currentbot]['id']}
      &sitemap=${sitemap}`
      , {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
        },
      });
       if (response.ok) {
        setsitemap("");
        alert("Data uploaded successfully!")
      } else {
        console.error('Error uploading data:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
    setloading(false)
  }

  const handleChangeSitemap = (e) => {
    setsitemap(e.target.value);
  };

  const pdfmethod = async () => {
    setloading(true)
    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/chat/pdfmethod/?bot_id=${userInfo["bots"][currentbot]['id']}
      &pdfurl=${pdf}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        setpdf("");
        alert("Data uploaded successfully!")
      } else {
        console.error('Error uploading data:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
    setloading(false)
  }

  const handleChangePDF = (e) => {
    setpdf(e.target.value);
    console.log(e.target.value)
  };

  const handleChangeURL = (e) => {
    setURL(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value)
  };

  const urlmethod = async () => {
  setloading(true)
  const url_list = url.split('\n');
    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/chat/urlmethod/?bot_id=${userInfo["bots"][currentbot]['id']}`
      , {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url_list),
      });
      
      if (response.ok) {
        setURL("");
        alert("Data uploaded successfully!")
      } else {
        console.error('Error uploading data:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
    setloading(false)
  };

  const textmethod = async () => {
    setloading(true)
      try {
        const response = await fetch(`https://backend-connectgpt.azurewebsites.net/chat/textmethod/?bot_id=${userInfo["bots"][currentbot]['id']}
        &text=${text}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        
        if (response.ok) {
          console.log('Data uploaded successfully!');
          setText("");
          alert("Data uploaded successfully!")
        } else {
          console.error('Error uploading data:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading data:', error);
      }
      setloading(false)
    };

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
        if (response.ok) {
        console.log(data);
        setUserInfo(data);
      }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    const botchange = async (e) => {
      console.log("Bot changed");
      await setcurrentbot(e.target.selectedIndex)
      console.log(e.target.selectedIndex)
    }  

    useEffect(() => {
      fetchUserInfo();
    },[]);

    
 if(userInfo!=null)
  return (
    <>
 <h3 className="font-medium text-black dark:text-white p-3">
                🧠 Add Data
                </h3> 
                <select name='bot' value={currentbot} onChange={botchange}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                {userInfo["bots"].map((item, index) => (
                    <option name={item.name} key={index} value={index}>
                      {item.id} {item.name}</option>
                  ))}
    </select> <br/><br/>


   
    <div className="flex flex-col gap-9">
    
    {/* <!-- Textarea Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Webpage URLs
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  List all the urls
                </label>
                <textarea
                  onChange={handleChangeURL}
                  value = {url}
                  rows={6}
                  placeholder="One URL per line"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>
              <button onClick={() => {urlmethod()}}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            > {loading ? "Uploading..." : "Upload"}
            </button>
</div> 

</div> </div> 
<br/>
  <div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Text
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Paste your text here (avoid single lines or words)
                </label>
                <textarea
                  onChange={handleChangeText}
                  value = {text}
                  rows={6}
                  placeholder="500-1000 words recommended"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>
              <button onClick={() => {textmethod()}}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            > {loading ? "Uploading..." : "Upload"}
            </button>
</div> </div> </div> 

<br/>
<div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Sitemap
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Paste the website sitemap URL
                </label>
                <input type="text" placeholder="https://example.com/sitemap.xml"
                  onChange={handleChangeSitemap}
                  value = {sitemap}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </div>
              <button onClick={() => {sitemapmethod()}}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            > {loading ? "Uploading..." : "Upload"}
            </button>
</div> </div> </div> 


<br/>
<div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add PDF via URL
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Paste the PDF url
                </label>
                <input type="text" placeholder="https://example.com/example.pdf"
                  onChange={handleChangePDF} 
                  value = {pdf}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </div>
              <button onClick={() => {pdfmethod()}}
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            > {loading ? "Uploading..." : "Upload"}
            </button>
</div> </div> </div> 
  
  </>
)}

export default adddoc
