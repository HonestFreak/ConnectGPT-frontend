import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Docs = () => {
  const [docs, setDocs] = useState(null);
  const [docIndex, setDocIndex] = useState(0);
  const [currentBot, setCurrentBot] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const accessToken = localStorage.getItem('accessToken');

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`connectgpt-backend.azurewebsites.net/users/userinfo`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        setUserInfo(data);
        console.log(data);
        console.log(userInfo);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const fetchCols = async () => {
    try {
      const response = await fetch(`connectgpt-backend.azurewebsites.net/collections/getcol/?bot_id=${userInfo["bots"][currentBot]['id']}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully!");
        console.log(data);
        setDocs(data);
        setDocIndex(data.ids);
      } else {
        console.error('Failed to fetch collections');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  const botChange = async (e) => {
    console.log("Bot changed");
    const selectedIndex = e.target.selectedIndex;
    setCurrentBot(selectedIndex);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo !== null) {
      fetchCols();
    }
  }, [userInfo, currentBot]);

  if (userInfo !== null && docs !== null) {
    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white p-3">
              🧠 Indexed Data
            </h3>
            <select
              name="bot"
              value={currentBot}
              onChange={botChange}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
            >
              {userInfo["bots"].map((item, index) => (
                <option name={item.name} key={index} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Documents
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {docs["documents"].map((item, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      <details>
                        <summary>
                          {item.slice(0, 50) + (item.length > 50 ? "..." : "")}
                        </summary>
                        <p>{item}</p>
                      </details>
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-sm font-medium text-success">
                      <input
                        type="submit"
                        onClick={() =>
                          fetch(`connectgpt-backend.azurewebsites.net/collections/delindex/${docIndex[index]}`)
                        }
                        className="inline-flex items-center justify-end rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                        value="Delete"
                      />
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return null; // Render loading or placeholder UI
  }
};

export default Docs;
