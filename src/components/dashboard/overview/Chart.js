import { Bar } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Average Carbon Emissions(g)',
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
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Average Carbon Emissions',
      backgroundColor: `#53C351`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
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

const data = genData();



const Chart = () => {
  
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
