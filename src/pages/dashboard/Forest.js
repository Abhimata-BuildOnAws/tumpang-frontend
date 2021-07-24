import StatCards from "../../components/dashboard/StatCard"
import Header from '../../components/dashboard/Header'


const Forest = () => {
    return (
        <>
            <Header pageTitle="Forest" />

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

            <div className="pb-24"></div>

        </>
    )
}

export default Forest
