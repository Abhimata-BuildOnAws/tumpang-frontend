import { useState } from 'react'

import StatCards from "../../components/dashboard/StatCard"
import Header from '../../components/dashboard/Header'


const Forest = () => {
    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);
    const [numDeliveries, setNumDeliveries] = useState(60);
    const [numTumpangs, setNumTumpangs] = useState(16);
    const [co2Emission, setCo2Emission] = useState(15000);
    const [co2Saved, setCo2Saved] = useState(5000);

    
    return (
        <>
            <Header pageTitle="Forest" name={name} treePoints={treePoints} />

            <div className="flex justify-between px-8">
                <div className="">
                    <StatCards title='Deliveries' value={numDeliveries} />
                </div>
                <div className="">
                    <StatCards title='Tumpangs' value={numTumpangs} />
                </div>
                <div className="">
                    <StatCards title='CO2 Emission' value={co2Emission.toLocaleString() + 'g'} />
                </div>
                <div className="">
                    <StatCards title='CO2 Saved' value={co2Saved.toLocaleString() + 'g'} />
                </div>
            </div>

            <div className="pb-24"></div>

        </>
    )
}

export default Forest
