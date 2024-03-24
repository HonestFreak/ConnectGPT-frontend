import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const Giveaway = () => {
  const [producthunt, setProductHunt] = useState("");
  const [twitter, setTwitter] = useState("");
  const [submmited, setSubmitted] = useState(false);

  const handleTwitter = (event) => {
    setTwitter(event.target.value);
  };

  const handleProductHunt = (event) => {
    setProductHunt(event.target.value);
  };

  const accessToken = localStorage.getItem('accessToken');

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(producthunt, twitter);
    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/users/giveaway?producthunt=${producthunt}&twitter=${twitter}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Form submitted successfully
        console.log('Form submitted successfully');
        Swal.fire({
          icon: 'success',
          title: 'Credit Request Submitted!',
          text: 'Please wait for the admin to approve your request.',
        });

      } else {
        console.error('Error submitting form');
      }
      setTwitter("");
      setProductHunt("");
      setSubmitted(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  

  return (
    <>
      <h1 className="font-medium text-lg text-black dark:text-white p-3">
        🎁 Free Credits
      </h1>

      <div className="space-y-5">
      <div className=" border-stroke py-4 px-6 dark:bg-black dark:border-strokedark">
      <div className="py-5">  1. Give us your review on Product Hunt  
        <Link target="_blank" className="bg-primary p-2 ml-3 rounded-lg text-white" to="https://www.producthunt.com/products/connect-gpt#connect-gpt">
        Goto Product Hunt</Link>
        </div>
        <div className="py-3">
        <input onChange={handleProductHunt} className="rounded border w-1/2 border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" placeholder="Enter your Product Hunt username" />
      </div> </div>

      <div className=" border-stroke py-4 px-6 dark:bg-black dark:border-strokedark">
      <div className="py-5">  2. Follow us on Twitter
        <Link target="_blank" className="bg-primary p-2 ml-3 rounded-lg text-white" to="https://twitter.com/ConnectGptSaas">
        Goto Twitter Page</Link>
        </div>
        <div className="py-3">
        <input  onChange={handleTwitter} className="rounded border w-1/2 border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" placeholder="Enter your Twitter username" />
      </div> </div>

      <div onClick={submitForm} className="align-center text-center cursor-pointer border-stroke py-4 px-6 bg-[#006400] text-white">
        {submmited ? "Submitting" : "Get $1 Free Credits" }
      </div>
      </div>
          </>
  );
};

export default Giveaway;
