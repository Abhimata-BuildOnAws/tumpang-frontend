
const StatCards = () => {
    return (

        <div className="flex flex-wrap grid grid-cols-4 place-items-center"> 

            <div className="relative flex break-words bg-white rounded shadow-lg h-32 w-56 items-center">
                <div className="text-center flex-grow pt-6">
                    <h5 className="text-gray-400 text-s">
                        Deliveries
                    </h5>
                    <h3 className="p-1 text-4xl">
                        60
                    </h3>
                </div>
            </div>

            <div className="relative flex break-words bg-white rounded shadow-lg h-32 w-56 items-center">
                <div className="text-center flex-grow pt-6">
                    <h5 className="text-gray-400 text-s">
                        Tumpangs
                    </h5>
                    <h3 className="p-1 text-4xl">
                        15
                    </h3>
                </div>
            </div>

            <div className="relative flex break-words bg-white rounded shadow-lg h-32 w-56 items-center">
                <div className="text-center flex-grow pt-6">
                    <h5 className="text-gray-400 text-s">
                        CO2 Emissions
                    </h5>
                    <h3 className="p-1 text-4xl">
                        15,000g
                    </h3>
                </div>
            </div>

            <div className="relative flex break-words bg-white rounded shadow-lg h-32 w-56 items-center">
                <div className="text-center flex-grow pt-6">
                    <h5 className="text-gray-400 text-s">
                        CO2 Saved
                    </h5>
                    <h3 className="p-1 text-4xl">
                        5,000g
                    </h3>
                </div>
            </div>




        </div>
    )
}

export default StatCards
