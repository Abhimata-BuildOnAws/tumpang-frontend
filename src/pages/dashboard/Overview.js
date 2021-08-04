import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Auth } from 'aws-amplify';

import StatCards from "../../components/dashboard/StatCard"
import CarbonEmission from "../../components/dashboard/overview/CarbonEmission"
import MiniForest from "../../components/dashboard/overview/MiniForest"
import MiniLeaderboard from "../../components/dashboard/overview/MiniLeaderboard"
import Header from '../../components/dashboard/Header'

const Overview = () => {

    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);
    const [numDeliveries, setNumDeliveries] = useState(60);
    const [numTumpangs, setNumTumpangs] = useState(16);
    const [co2Emission, setCo2Emission] = useState(15000);
    const [co2Saved, setCo2Saved] = useState(5000);

    const history = useHistory();  

    // get current authenticated user details
    const setUserData = async() => {
        try{
            const { attributes } = await Auth.currentAuthenticatedUser();
            console.log(attributes);
            const userId = attributes.sub;
            const user = await axios.post(`/user/get_user`, {user_id: userId});
            // set user attributes
            setName(user.data.name);
            setTreePoints(user.data.tree_points);
            setCo2Emission(user.data.pollution);
            setCo2Saved(user.data.carbon_saved);
        }
        catch(e){
            history.push('/login')
            console.log(e);
        }
    };
    useEffect(() => {
        setUserData();
    }, []);


    return (
        <>
            <Header pageTitle="overview" name={name} treePoints={treePoints} />

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
