import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';
import Personality from '../components/PersonalitySuggestions';
import Swal from 'sweetalert2';
import Intention from '../components/IntentionSuggestions';
import NoAnswer from '../components/NoAnswerSuggestions';

const addbot = () => {
  const [success, setSuccess] = useState(false);
  const [ adding , setAdding] = useState(false);
  const [formData, setFormData] = useState({
    llm_model: "openai-gpt-3.5-turbo",
    name: "",
    personality: "",
    intent: "",
    no_answer: "",
    emd_model: "default",
    is_active: true,
    api_key: {openai: '', gemini: ''},
    creativity: 0.5
  });

  function addPersonality(new_personality) {
    handleInputChange({target: {name: 'personality', value: formData['personality'] + new_personality}});
    console.log(formData)
  }

  function addIntention(new_intention) {
    handleInputChange({target: {name: 'intent', value: formData['intent'] + new_intention}});
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    if(name.includes("api")) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        api_key: {
          ...prevFormData.api_key,
          [name.slice(0,-3)]: value,
        },
      }));
      console.log(formData)
    }
    else
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, 
    }));
    console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAdding(true);
    try {
      const accessToken = localStorage.getItem('accessToken');

      const createBotResponse = await fetch('https://backend-connectgpt.azurewebsites.net/bots/create-bot/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (createBotResponse.ok) {
        setSuccess(true);
        setAdding(false);
        Swal.fire({
          title: 'Bot Created Successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          llm_model: "openai gpt-4 credit",
          name: "",
          personality: "",
          intent: "",
          no_answer: "",
          emd_model: "default",
          is_active: true,
          api_key: {},
          creativity: 0.5
    });
      } else {
        console.error('Failed to create bot');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
    
  };

 return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Add Bot" />


        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              
              <div className="border-b  border-stroke py-4 px-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white p-3">
                🤖 New Bot Settings
                </h3> 
              </div>

              <div className="p-7">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Bot's Name
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          value={formData['name']}
                          onChange={handleInputChange}
                          id="fullName"
                          name='name'
                          />
                      </div>
                    </div>

                   </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Personality
                    </label>
                    <div className="relative">
                    <Personality change = {addPersonality} />

                      <span className="absolute left-4.5 top-4">
                      </span>

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="personality"
                        rows={6}
                        placeholder="Personality of bot ..."
                        value={formData['personality']}
                        onChange={handleInputChange}
                        ></textarea>
                    </div>
                  </div>


                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Intent
                    </label>
                    <div className="relative">
                      <Intention change = {addIntention} />
                      <span className="absolute left-4.5 top-4">
                      </span>

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="intent"
                        rows={6}
                        value={formData['intent']}
                        onChange={handleInputChange}
                        ></textarea>
                    </div>
                  </div>


                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Message when no result is found
                    </label>
                    <div className="relative">
                      <NoAnswer change = {addIntention} />
                      <span className="absolute left-4.5 top-4">
                      </span>

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="no_answer"
                        rows={6}
                        value={formData['no_answer']}
                        onChange={handleInputChange}></textarea>
                    </div>
                  </div>



            <div className="flex flex-col gap-5.5 ">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  LLM Model
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select value={formData['llm_model']} name='llm_model'
                        onChange={handleInputChange} 
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                        <option value="openai gpt-4 credit">OpenAI GPT-4 (from credits)</option>
                        <option value="openai gpt-4-32k credit">OpenAI GPT-4-32k (from credits)</option>
                        <option value="openai gpt-3.5-turbo credit">OpenAI GPT-3.5 Turbo (from credits)</option>
                        <option value="openai gpt-4">OpenAI GPT-4</option>
                        <option value="openai gpt-4-32k">OpenAI GPT-4-32k</option>
                        <option value="openai gpt-3.5-turbo">OpenAI GPT-3.5 Turbo</option>
                        <option value="gemini pro">Google Gemini</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Embedding Model (change only if no data is trained yet)
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select  
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                     <option value="default">all-MiniLM-L6-v2 ( Default | free )</option>
                        <option value="all-mpnet-base-v2">all-mpnet-base-v2 (free)</option>
                        <option value="all-MiniLM-L12-v2">all-MiniLM-L12-v2 (free)</option>
                        <option value="openai">OpenAI ada-002</option>
                        <option value="cohere-large">Cohere Large</option>
                        <option value="cohere-multilingual">Cohere Multilingual</option>
                  </select>
                </div>
              </div> 
              
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Creativity
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select value={formData['creativity']} name='creativity' onChange={handleInputChange}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                    <option value="0.5">Balanced</option>
                    <option value="0">Precise</option>
                    <option value="1">Creative</option>
                  </select>
                </div>
              </div>         
              </div>
                  <div className="flex justify-end gap-4.5 py-3">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-success py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                      onClick={(e) => {
                        console.log("clicked");
                        handleSubmit(e)
                      }}
                    >
                      { adding ? <>Adding ...</> : <>+ Add Bot</>}
                    </button>
                  </div>
      
      { success && (
         <div className="mb-3  inline-flex py-5 text-success" role="alert">
         <span className="mr-2">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="currentColor"
             className="h-5 w-5">
             <path
               fillRule="evenodd"
               d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
               clipRule="evenodd" />
         </svg></span> 
         Bot Updated Successfully </div>
                
      ) }
      </div>
      </div>
        </div>

      <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm bg-white shadow-default dark:bg-boxdark">
            <form onSubmit={handleSubmit}>
              <div className="py-4 px-4 ">
                <h3 className=" font-mediumtext-black dark:text-white p-3">
                  🔑 API Keys
                </h3>
               <div className='text-sm font-light p-3 w-full text-center'> Add if you plan to use your own API keys </div>

                <div className="w-full space-y-4">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="fullName"
                  >
                    OpenAI API key
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-4"></span>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      value={formData.api_key.openai}
                      onChange={handleInputChange}
                      name='openaiapi'
                   />
                  </div>

                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="fullName"
                  >
                    Gemini API Key
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-4"></span>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      id="gemini"
                      name="gemini" value={formData.api_key.gemini}
                      onChange={handleInputChange}
                    />
                  </div>

                 </div>
              </div>
              <div className="flex justify-end gap-4.5 py-3 px-3">
              </div> 
            </form>
            </div> </div>
            </div>
          </div>
</>
  );
};

export default addbot;
