import useColorMode from '../../hooks/useColorMode';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

const Verify = () => {
  useColorMode();
  const [verified, setVerified] = useState<boolean>(false);
  const verify = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const otp = urlParams.get('otp');
    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/users/verify/${email}/${otp}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(response.ok){
        setVerified(true);
        confetti();
      }
      else {
        Swal.fire({
          title: 'Error',
          text: 'An error occurred. Please try again. Please contact support if the problem persists.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    }
    catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'An error occurred. Please try again. Please contact support if the problem persists.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      console.error(error);
    }

    
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
    <div className="h-screen rounded-sm border  shadow-default border-strokedark bg-boxdark">
   { verified ? ( 
        <div className="flex flex-wrap items-center text-center">
                    
        <div className="hidden w-full xl:block py-20">
        <img className='mx-auto'
          src="https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif" alt="gif" />
          Your account has been verified. You can now login. <br/>
          Our bots are excited to be part of your team! <br/><br/>
          <button className=' rounded-md px-8 py-3 bg-meta-5 text-white round'
          onClick={() => window.location.href = '/auth/signin'}
          > Signin </button>
          </div>
        </div>
    ) : 
    <>   
    <div className='flex items-center h-1/3 justify-center'> Please Wait while we verify your account </div>
    <div className='flex space-x-2 justify-center  h-screen'>
    <div className='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s]'>
      🔴
    </div>
    <div className='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s]'>
      🟡
    </div>
    <div className='h-8 w-8 rounded-full animate-bounce'>
      🔵
    </div>
</div>
 </>
    }</div>
    </>
  );
};

export default Verify;
