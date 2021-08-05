import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Auth } from 'aws-amplify';

import StatCards from "../../components/dashboard/StatCard";
import Header from '../../components/dashboard/Header';


const Forest = () => {
    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);
    const [numDeliveries, setNumDeliveries] = useState(60);
    const [numTumpangs, setNumTumpangs] = useState(16);
    const [co2Emission, setCo2Emission] = useState(15000);
    const [co2Saved, setCo2Saved] = useState(5000);
    const [treesPlanted, setTreesPlanted] = useState(8);
    const [treesNeeded, setTreesNeeded] = useState(5);


    const history = useHistory();  

    // get current authenticated user details
    const setUserData = async() => {
        try{
            const { attributes } = await Auth.currentAuthenticatedUser();
            console.log(attributes);
            const userId = attributes.sub;
            const user = await axios.post(`/user/get_user`, {user_id: userId});
            const user_stats = await axios.post(`/user/user_stats`, {user_id: userId});
            // set user attributes
            setName(user.data.name);
            setTreePoints(user.data.tree_points);
            setCo2Emission(user.data.pollution);
            setCo2Saved(user.data.carbon_saved);
            setNumDeliveries(user_stats.data.number_of_deliveries);
            setNumTumpangs(user_stats.data.number_of_tumpangs);

            // set forest data
            setTreesPlanted(Math.floor(user.data.tree_points/200));
            setTreesNeeded((user.data.pollution/21000).toFixed(2));
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

            <div className="h-screen">
                <div className="flex flex-col pt-8 justify-center">
                    <h1 className="text-center text-2xl font-bold">Welcome to your forest</h1>
                    <p className="text-center">See your effect on the environment</p>
                </div>
                <div className="flex justify-center h-4/5">
                    <img alt="forest" src={require("../../assets/img/forest.png").default} />
                </div>
                
                <div className="px-8 text-2xl font-bold">
                    <h1 className="">{treesPlanted} Trees Planted</h1>
                    <h1 className="">{treesNeeded} Trees Needed To Absorb Your Carbon Emissions For A Year</h1>
                </div>
            </div>

        </>
    )
}

export default Forest
