import StatCards from "../../components/dashboard/StatCard"
import Chart from "../../components/dashboard/Chart"


const Overview = ({setPageTitle}) => {
    setPageTitle('Overview')

    return (
        <>
            <div className="flex flex-wrap grid grid-cols-4 place-items-center">
                <div className="">
                    <StatCards title='Deliveries' value="60" />
                </div>
                <div className="">
                    <StatCards title='Tumpangs' value="16" />
                </div>
                <div className="">
                    <StatCards title='CO2 Emission' value="15,000g" />
                </div>
                <div className="">
                    <StatCards title='CO2 Saved' value="5,000g" />
                </div>
            </div>

            <div className="h-20"></div>

            <div className="flex flex-wrap grid grid-cols-4 ">
                <div className="col-start-2 col-end-4 relative h-96 flex bg-black bg-white rounded shadow-md grid-cols-4 border-2">
                        <div className="absolute inset-y-0 right-0 h-full w-1/4 flex flex-col justify-center space-y-3 ">
                            <div className="text-center border-2">
                                <h5 className="text-gray-400 text-xs">Resolved</h5>
                                <h3 className="p-1 text-2xl">449</h3>
                            </div>
                            <div className="text-center border-2">
                                <h5 className="text-gray-400 text-xs">Received</h5>
                                <h3 className="p-1 text-2xl">449</h3>
                            </div>
                            <div className="text-center border-2">
                                <h5 className="text-gray-400 text-xs">Average Carbon Emitted</h5>
                                <h3 className="p-1 text-2xl">5400g</h3>
                            </div>
                            <div className="text-center border-2">
                                <h5 className="text-gray-400 text-xs">Average Carbon Saved</h5>
                                <h3 className="p-1 text-2xl">3200g</h3>
                            </div>
                            <div className="text-center border-2">
                                <h5 className="text-gray-400 text-xs">Effective Carbon Emitted</h5>
                                <h3 className="p-1 text-2xl">2200g</h3>
                            </div>
                        </div>

                        <div className="absolute h-full p-4 w-3/4">
                            <Chart />
                        </div>
                </div>
            </div>

        
        </>
    )   
}

export default Overview
