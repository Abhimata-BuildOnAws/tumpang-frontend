import StatCards from "../../components/dashboard/StatCard"

const Forest = ({setPageTitle}) => {
    setPageTitle('Forest')
    return (
        <>
            <div className="flex flex-wrap grid grid-cols-4 place-items-center">
                <StatCards title='Deliveries' value="60" />
                <StatCards title='Tumpangs' value="16" />
                <StatCards title='CO2 Emission' value="15,000g" />
                <StatCards title='CO2 Saved' value="5,000g" />
            </div>
        </>
    )
}

export default Forest
