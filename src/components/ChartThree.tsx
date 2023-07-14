import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartThreeState {
  series: number[];
}



const ChartThree: React.FC = (prop) => {

  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: prop.propvalue[0],
    legend: {
      show: true,
      position: 'bottom',
    },
  
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const [state, setState] = useState<ChartThreeState>({
    series: prop.propvalue[1],
  });

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-1">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
          🤖 Query Distribution by Bots
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

     
    </div>
  );
};

export default ChartThree;
