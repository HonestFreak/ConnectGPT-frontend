import { useEffect, useState } from 'react';

const Credit = () => {
  const [creditrange, setCreditRange] = useState(50);
  const [currentCredit, setCurrentCredit] = useState(0);
  const [bots, setBots] = useState([]);
  const [transferamount, setTransferAmount] = useState(0);
  const [bot_id, setBotId] = useState(0);

  const loaddata = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch('connectgpt-backend.azurewebsites.net/users/userinfo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setCurrentCredit(data.credits);
        setBots(data.bots);
        console.log(bots)
      } else {
        console.error('Failed to fetch credit');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  }

  const transfer = async (e) => {
    e.preventDefault();

    try {
        const accessToken = localStorage.getItem('accessToken');

        const transfer = await fetch(`connectgpt-backend.azurewebsites.net/credit/transfer?amount=${transferamount}&bot_id=${bot_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
            },
        });
        if(transfer.ok) {
          loaddata(); }
    } catch (error) {
        console.error('An error occurred', error);
    }
    
  }

  const buy = async () => {
    try {
        const accessToken = localStorage.getItem('accessToken');

        const createCheckoutSessionResponse = await fetch(`connectgpt-backend.azurewebsites.net/credit/create-checkout-session?amount=${creditrange}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
            },
        });

        if (createCheckoutSessionResponse.ok) {
            const checkoutSession = await createCheckoutSessionResponse.json();
            // Redirect to Stripe checkout session URL
            const newWindow = window.open(checkoutSession, '_blank');
        } else {
            console.error('Failed to create checkout session');
        }
    } catch (error) {
        console.error('An error occurred', error);
    }
    
  };

  useEffect(() => {
    loaddata();
  }, []);

 return (
    <>
      <div className="mx-auto max-w-270">
        <div className='text-3xl'> $ {currentCredit} </div>
        <div className='text-md'> Total Credits </div> <br/>
        
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-4 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              
              <div className="border-b  border-stroke py-4 px-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white p-3">
                🤖 Transfer Credit to Bots
                </h3> 
              </div>
              <div className="p-7">                
            <div className="grid grid-cols-2 flex flex-col gap-5.5 pb-5">
              <div className='col-span-1'>
                <label className="mb-3 block text-black dark:text-white">
                  Transfer to 
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select onChange={(e) => setBotId(parseInt(e.target.value))}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                    <option value=''>Select Bot</option>
                    {bots.map((bot) => (
                      <option value={bot.id}>{bot.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='col-span-1'>
                <label className="mb-3 block text-black dark:text-white">
                  Amount
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <input
                    className="relative z-20 w-full rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    type="number"
                    name='name'
                    onChange={(e) => setTransferAmount(parseFloat(e.target.value))}
                  />
                </div>
              </div> 
              
           
              </div>
                  <div className="flex justify-end gap-4.5 py-3">
                    <button
                      className="flex justify-center rounded bg-success py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                      onClick={transfer}
                    >
                       Transfer
                    </button>
                  </div>
      </div>
      </div>
        </div>

      <div className="col-span-5 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b  border-stroke py-4 px-4 dark:border-strokedark">
                <h3 className="font-mediumtext-black dark:text-white p-3">
                🪙 Buy Credits
                </h3>
                </div>

                <div className="w-full p-7 space-y-4">
                  $ { creditrange}
                  <input className="w-full h-2 rounded-lg cursor-pointer" 
                   type='range' min={1} max={100} 
                   onChange={(e) => setCreditRange(parseInt(e.target.value))}
                   />
                  
                  <div className="flex justify-between">
                    <div className="text-gray-500">1</div>
                    <div className="text-gray-500">50</div>
                    <div className="text-gray-500">100</div>
                  </div>

                  <div className="flex justify-end gap-4.5 py-3">
                    <button
                      className="flex justify-center rounded bg-success py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                      onClick={buy}
                    >
                       Buy {creditrange} Credits
                    </button>
                  </div>
                 </div>
              </div>
            </div>          
           

          {/* table */}
          <div className="col-span-4 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        My Bots
      </h4>

      <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Bot ID
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Bot Name
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Credits Available
              </h5>
            </div>
          </div>

        { bots.map((bot) => (
          <div className="flex flex-col">
         
  
          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
              </div>
              <p className="hidden text-black dark:text-white sm:block">{bot.id}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{bot.name}</p>
            </div>
  
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">$ {bot.credits}</p>
            </div>
  
        
          </div>
  
  
       
        </div>
          )) }
      
    </div>

    </div>
  </div>

</>
  );
};

export default Credit;
