import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import useAuth from '../../hooks/useAuth.tsx';

import { useState, useEffect } from "react";

const Dashboard = () => {
  useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const accessToken = localStorage.getItem('accessToken');
  console.log('Access token:', accessToken);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://backend-connectgpt.azurewebsites.net/users/dashboard`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'accept': 'application/json', // You can include this header as well
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = await response.json();
      setDashboardData(data);
      console.log('Dashboard data:', data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      window.location.href = '/auth/signin';
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (dashboardData) {
    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardOne propvalue={dashboardData.totalchats} />
          <CardTwo propvalue={dashboardData.totalusers} />
          <CardThree propvalue={dashboardData.totalindex} />
          <CardFour propValue={dashboardData.totalbots} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 xl:grid-cols-2">
          <ChartThree propvalue={dashboardData.botchart} />
          <ChatCard propvalue={dashboardData.recentmessages} />
        </div>
      </>
    );
  } else {
    return null; // Return null or a loading indicator while waiting for data
  }
};

export default Dashboard;
