import StatCards from "../../components/dashboard/StatCard"
import CarbonEmission from "../../components/dashboard/overview/CarbonEmission"
import MiniForest from "../../components/dashboard/overview/MiniForest"
import MiniLeaderboard from "../../components/dashboard/overview/MiniLeaderboard"
import Header from '../../components/dashboard/Header'


const Overview = () => {

    return (
        <>
            <Header pageTitle="overview" />

            <div className="flex justify-between px-8">
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

            <div className="my-10 px-8 h-96">
                <CarbonEmission />
            </div>

            <div className="flex px-8 mb-8 gap-10">
                <MiniForest />
                <MiniLeaderboard />
            </div>
        
        </>
    )   
}

export default Overview
