import useColorMode from '../../hooks/useColorMode';
import { useEffect } from 'react';
import { useState } from 'react';
const Verify = () => {
  useColorMode();
  const [verified, setVerified] = useState<boolean>(false);
  let count = 0;
  const verify = async () => {
    count++;
    console.log(count)
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const otp = urlParams.get('otp');
    try {
      const response = await fetch(`api.azurewebsites.net/users/verify/${email}/${otp}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if(response.ok){
        setVerified(true);
        console.log("verified")
      }
    }
    catch (error) {
      console.error(error);
    }

    
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
    <div className="h-screen rounded-sm border  shadow-default border-strokedark bg-boxdark">
   { verified && ( 
        <div className="flex flex-wrap items-center text-center">
                    
        <div className="hidden w-full xl:block py-20">
        <img className='mx-auto'
          src="https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif" alt="gif" />
          Your account has been verified. You can now login. <br/>
          Our bots are excited to be part of your team! <br/>
          </div>
        </div>
    )}</div>
    </>
  );
};

export default Verify;
