import Chart from "./Chart"
import ChartStatsCard from "./ChartStatsCard"


const CarbonEmission = () => {
    return (
        <div className="col-start-2 col-end-4 relative h-96 flex flex-col bg-black bg-white rounded shadow-md grid-cols-4 border-2">
            <div className="absolute inset-y-0 right-0 h-full w-1/4 flex flex-col justify-center space-y-3 ">
                <ChartStatsCard title="Resolved" value="449" />
                <ChartStatsCard title="Received" value="426" />
                <ChartStatsCard title="Average Carbon Emitted" value="5400g" />
                <ChartStatsCard title="Average Carbon Saved" value="3200g" />
                <ChartStatsCard title="Effective Carbon Emitted" value="2200g" />
            </div>

            <div className='header p-4'>
                <h1 className='title'>Your Carbon Emissions</h1>
            </div>

            <div className=" h-full p-4 w-3/4">
                <Chart />
            </div>

        </div>    
    )
}

export default CarbonEmission
