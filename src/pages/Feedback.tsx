import { useState } from "react";


const Feedback = () => {
  const [feedback, setfeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setfeedback(event.target.value);
  };


  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/users/feedback?feedback=${feedback}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Form submitted successfully
        console.log('Form submitted successfully');
        setSubmitted(true);

      } else {
        console.error('Error submitting form');
      }
      setfeedback("");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


 
    return (
      <>

       
         { submitted && 
        <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                  fill="white"
                  stroke="white"
                ></path>
              </svg>
            </div>
            <div className="w-full">
              <h5 className="mb-3 text-md font-semibold text-black dark:text-[#34D399] ">
                Feedback Submitted Successfully
              </h5>
              <p className="text-base leading-relaxed text-body">
              Thank you for being an advocate for improvement! Your feedback demonstrates your commitment to our shared goals. We're truly fortunate to have proactive users like you who drive positive change.
              </p>
            </div>
          </div>}

        <div className="border-b  border-stroke py-4 px-4 dark:border-strokedark">
          <h1 className="font-medium text-lg text-black dark:text-white p-3">
            📝 Feedback / Suggestion / Feature Request
          </h1>
          😄 We are always looking to improve our product. <br/>
          🤗 If you have any feedback, suggestion, or feature addition request please let us know below. 
          We will get back to you as soon as possible. <br/>
          😇 User satisfaction and community feedback are our top priority. <br/>  
        </div>
        <form onSubmit={submitForm} className="space-y-4">
          <div className="relative">
            <span className="absolute left-4.5 top-4"></span>
            <textarea
              className="w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              name="feedback"
              placeholder="Enter your feedback here..."
              rows={6}
              value={feedback}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
            type="submit"
          >
            Submit
          </button>
        </form>
        <br></br> 

      </>
    );
};

export default Feedback;
