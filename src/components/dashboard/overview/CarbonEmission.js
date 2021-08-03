import { useState, useEffect } from "react"

import Chart from "./Chart"


const CarbonEmission = () => {

    const [averageCarbonEmissionPerDelivery, setAverageCarbonEmissionPerDelivery] = useState(1040); 
    const [averageCarbonEmissionSavedPerDelivery, setAverageCarbonEmissionSavedPerDelivery] = useState(5400); 
    const [effectiveCarbonEmissionPerDelivery, setEffectiveCarbonEmissionPerDelivery] = useState(3200);
    const [averageNumberOfTumpangsPerMonth, setAverageNumberOfTumpangsPerMonth] = useState(22);


    return (
        <div className="w-full h-full flex bg-white rounded shadow-md border-2">
            
            <div className="p-4 w-3/4">
                <h1 className='title'>Your Carbon Emissions</h1>
                <h3 className="text-xs text-gray-400">For the last 6 months</h3>
                <div className="py-8 h-full">
                    <Chart />
                </div>
            </div>

            <div className="w-1/4">
                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Carbon Emission Per Delivery</h5>
                    <h3 className="p-1 text-2xl">{averageCarbonEmissionPerDelivery.toLocaleString()}g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Carbon Emissions Saved Per Delivery</h5>
                    <h3 className="p-1 text-2xl">{averageCarbonEmissionSavedPerDelivery.toLocaleString()}g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Effective Carbon Emissions Per Delivery</h5>
                    <h3 className="p-1 text-2xl">{effectiveCarbonEmissionPerDelivery.toLocaleString()}g</h3>
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
