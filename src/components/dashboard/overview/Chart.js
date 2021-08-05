import { Bar } from 'react-chartjs-2';


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
