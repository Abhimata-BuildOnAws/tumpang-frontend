import StatCards from "../../components/dashboard/StatCard"
import CarbonEmission from "../../components/dashboard/overview/CarbonEmission"
import MiniForest from "../../components/dashboard/overview/MiniForest"
import MiniLeaderboard from "../../components/dashboard/overview/MiniLeaderboard"


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
                <CarbonEmission />
            </div>

            <div className="flex flex-row justify-center">
                <MiniForest />
                <MiniLeaderboard />
            </div>
        
        </>
    )   
}

export default Overview
