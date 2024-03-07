import React, { useState, useEffect } from 'react';
import Loader from '../common/Loader';
import Swal from 'sweetalert2';

const BotTable = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState(null);
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
      setUserInfo(data);
      console.log(data);
      if(!response.ok) window.location.href = '/auth/signin';
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return ( userInfo ?
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        🤖 My Bots
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Chats
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Credits
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          

        {userInfo && userInfo.bots.map((bot) => (<>
        <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">
              { ((bot.credits <= 0)) ? '🔴' : '🟢'
              }
              </p>
          <p className="hidden text-black dark:text-white sm:block">{bot.id}</p>
        </div>

        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white">{bot.name}</p>
        </div>

        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-meta-3">{bot.total_chat}</p>
        </div>

        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p className="text-black dark:text-white">${bot.credits}</p>
        </div>

        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-1">
          <button className="text-white bg-meta-3 rounded-md p-2 text-xs dark:text-primarydark" 
                onClick={()=> { window.location.href = `./credit?bot_id=${bot.id}`; }}
          >Add 💎</button>
          <button className="text-white bg-meta-4 rounded-md p-2 text-xs dark:text-primarydark"
          onClick={()=> { window.location.href = `./settings?bot_id=${bot.id}`; }}
          >⚙️</button>
          <button className="text-white bg-meta-5 rounded-md p-2 text-xs dark:text-primarydark"
           onClick={()=> { window.location.href = `./Documents`; }}
          >🧠</button>
          <button className="text-white bg-meta-1 rounded-md p-2 text-xs dark:text-primarydark"
            onClick={() => { 
              Swal.fire({
                icon: 'info',
                title: 'Are you sure you want to delete this bot?',
                text: 'This process cannot be undone. Your credits will be transferred back to your account',
                showConfirmButton: true,
                showCancelButton: true,
              }).then((result) => {
                if (result.isConfirmed) {
                  fetch(`https://backend-connectgpt.azurewebsites.net/bots/delete/${bot.id}`, {
                    method: 'DELETE',
                    headers: {
                      'Authorization': `Bearer ${accessToken}`,
                      'Accept': 'application/json',
                    },
                  }).then((response) => {
                    if (response.ok) {
                      Swal.fire({
                        icon: 'success',
                        title: 'Bot deleted successfully',
                      }).then(() => {
                        window.location.reload();
                      });
                    } else {
                      Swal.fire({
                        icon: 'error',
                        title: 'An error occurred while deleting the bot',
                      });
                    }
                  });
                }
              });
            }}            
          >🗑️</button>

        </div></>))}
        </div>
       
      </div>
    </div>
   : 
  <Loader />)
};

export default BotTable;
