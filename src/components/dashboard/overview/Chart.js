import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

const rand = () => Math.floor(Math.random() * 255);

const defaultData = () => ({
  labels: ['February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Effective Carbon Emissions(g)',
      borderColor: `#83BB65`,
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Total Carbon Emissions',
      backgroundColor: `#DFE0EB`,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Carbon Emissions Saved',
      backgroundColor: `#53C351`,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  // aspectRatio:2,
  maintainAspectRatio: false,
};

const data = defaultData();



const Chart = () => {

  //ask ruixian how to dynamically call data from the last 6 months
  
  // get the last 6 months as labels

  // call back end from start to end period of these time intervals

  
  const getDatasetAtEvent = dataset => {
    if (!dataset.length) return;
  };

  const getElementAtEvent = element => {
    if (!element.length) return;
  };

  const getElementsAtEvent = elements => {
    if (!elements.length) return;
  };

  return (
    <>
      <Bar className="h-4"
        data={data}
        height={null}
        width={null}
        options={options}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
        getElementsAtEvent={getElementsAtEvent}
      />
    </>
  );}

export default Chart
