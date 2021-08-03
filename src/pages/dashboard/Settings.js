import {useState} from 'react'
import Header from '../../components/dashboard/Header'


const Settings = () => {

    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);
    const [numDeliveries, setNumDeliveries] = useState(60);
    const [numTumpangs, setNumTumpangs] = useState(16);
    const [co2Emission, setCo2Emission] = useState(15000);
    const [co2Saved, setCo2Saved] = useState(5000);

    return (
        <>
            <Header pageTitle="Settings" name={name} treePoints={treePoints} />
        </>
)
}

export default Settings
