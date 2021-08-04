import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';


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



const Chart = ({data}) => {

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
