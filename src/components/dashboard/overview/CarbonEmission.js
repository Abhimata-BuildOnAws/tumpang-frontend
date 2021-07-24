import Chart from "./Chart"


const CarbonEmission = () => {
    return (
        <div className="w-full h-full flex bg-white rounded shadow-md border-2">
            
            <div className="p-4 w-3/4">
                <h1 className='title'>Your Carbon Emissions</h1>
                <div className="py-8 h-full">
                    <Chart />
                </div>
            </div>

            <div className="w-1/4">
                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Carbon Emitted Per Delivery</h5>
                    <h3 className="p-1 text-2xl">1040g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Carbon Emitted</h5>
                    <h3 className="p-1 text-2xl">5400g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-b-2 border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Average Carbon Saved</h5>
                    <h3 className="p-1 text-2xl">3200g</h3>
                </div>

                <div className="flex flex-col justify-center text-center border-l-2 h-1/4">
                    <h5 className="text-gray-400 text-xs">Effective Carbon Emitted</h5>
                    <h3 className="p-1 text-2xl">2200g</h3>
                </div>
            </div>

        </div>    
    )
}

export default CarbonEmission
