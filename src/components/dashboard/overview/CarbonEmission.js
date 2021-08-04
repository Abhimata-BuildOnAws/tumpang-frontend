import { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify';
import axios from 'axios';


import Chart from "./Chart"


const CarbonEmission = () => {

    const [averageCarbonEmissionPerMonth, setAverageCarbonEmissionPerMonth] = useState(1040); 
    const [averageCarbonEmissionSavedPerMonth, setAverageCarbonEmissionSavedPerMonth] = useState(5400); 
    const [effectiveCarbonEmissionPerMonth, setEffectiveCarbonEmissionPerMonth] = useState(3200);
    const [averageNumberOfTumpangsPerMonth, setAverageNumberOfTumpangsPerMonth] = useState(22);

    const [chartLabels, setChartLabels] = useState(['February', 'March', 'April', 'May', 'June', 'July']);
    const [chartDataTotalCarbonEmission, setChartDataTotalCarbonEmission] = useState([0, 0, 0, 0, 0, 0]);
    const [chartDataSavedCarbonEmission, setChartDataSavedCarbonEmission] = useState([0, 0, 0, 0, 0, 0]);
    const [chartDataEffectiveCarbonEmission, setChartDataEffectiveCarbonEmission] = useState([0, 0, 0, 0, 0, 0]);

    // const rand = () => Math.floor(Math.random() * 255);
    const chartData = () => ({
        labels: chartLabels,
        datasets: [
          {
            type: 'line',
            label: 'Effective Carbon Emissions(g)',
            borderColor: `#83BB65`,
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            data: chartDataTotalCarbonEmission,
          },
          {
            type: 'bar',
            label: 'Total Carbon Emissions',
            backgroundColor: `#DFE0EB`,
            data: chartDataSavedCarbonEmission,
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'Carbon Emissions Saved',
            backgroundColor: `#53C351`,
            data: chartDataEffectiveCarbonEmission,
          },
        ],
    });
    const data = chartData();




    // set data from the last 6 months
    const setCarbonHistoryData = async() => {
        try{
            const { attributes } = await Auth.currentAuthenticatedUser();
            const userId = attributes.sub;
            const res = await axios.post(`/tumpang/emission_history`, {user_id: userId, month_range: 5});
            const emissionsArray = (res.data.monthly_emissions.data).reverse();

            let numMonths = 0;
            let totalCarbonEmission = 0;
            let totalCarbonEmissionSaved = 0;
            let totalEffectiveCarbonEmission = 0;
            let totalNumTumpang = 0;

            const months = [];
            const monthTotalCarbonEmission = [];
            const monthSavedCarbonEmission = [];
            const monthEffectiveCarbonEmission = [];
            
            // run loop through emissions array
            emissionsArray.forEach((element, index) => {
                // check that there is valid data
                if (element.attributes.carbon_emission){
                    numMonths++;
                    totalCarbonEmission += element.attributes.carbon_emission;
                    totalCarbonEmissionSaved += element.attributes.carbon_emission_saved;
                    totalEffectiveCarbonEmission += element.attributes.effective_carbon_emission;
                    totalNumTumpang += element.attributes.number_of_tumpang;

                    monthTotalCarbonEmission.push(element.attributes.carbon_emission);
                    monthSavedCarbonEmission.push(element.attributes.carbon_emission_saved);
                    monthEffectiveCarbonEmission.push(element.attributes.effective_carbon_emission);
                }
                else {
                    monthTotalCarbonEmission.push(0)
                    monthSavedCarbonEmission.push(0);
                    monthEffectiveCarbonEmission.push(0);
                }
                // add all data into chart array
                months.push(element.attributes.month);
            });

            // set values
            setAverageCarbonEmissionPerMonth((totalCarbonEmission/numMonths).toLocaleString());
            setAverageCarbonEmissionSavedPerMonth((totalCarbonEmissionSaved/numMonths).toLocaleString());
            setEffectiveCarbonEmissionPerMonth((totalEffectiveCarbonEmission/numMonths).toLocaleString());
            setAverageNumberOfTumpangsPerMonth(totalNumTumpang/numMonths);

            //set chart data
            setChartLabels(months);
            setChartDataTotalCarbonEmission(monthTotalCarbonEmission);
            setChartDataSavedCarbonEmission(monthSavedCarbonEmission);
            setChartDataEffectiveCarbonEmission(monthEffectiveCarbonEmission);
        }
        catch(e){
            console.log(e)
        }
    };
    useEffect(() => {
        setCarbonHistoryData();
    }, []);



    return (
        <div className="w-full h-full flex bg-white rounded shadow-md border-2">
            
            <div className="p-4 w-3/4">
                <h1 className='title'>Your Carbon Emissions</h1>
                <h3 className="text-xs text-gray-400">For the last 6 months</h3>
                <div className="py-8 h-full">
                    <Chart data={data} />
                </div>
            </div>

            <div className="w-1/4">
                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Carbon Emissions Per Month</h5>
                    <h3 className="p-1 text-2xl">{averageCarbonEmissionPerMonth.toLocaleString()}g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Carbon Emissions Saved Per Month</h5>
                    <h3 className="p-1 text-2xl">{averageCarbonEmissionSavedPerMonth.toLocaleString()}g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Effective Carbon Emissions Per Month</h5>
                    <h3 className="p-1 text-2xl">{effectiveCarbonEmissionPerMonth.toLocaleString()}g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Number Of Tumpangs Per Month</h5>
                    <h3 className="p-1 text-2xl">{averageNumberOfTumpangsPerMonth}</h3>
                </div>
            </div>

        </div>    
    )
}

export default CarbonEmission
