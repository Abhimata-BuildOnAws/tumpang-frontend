import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Auth } from 'aws-amplify';

import StatCards from "../../components/dashboard/StatCard"
import CarbonEmission from "../../components/dashboard/overview/CarbonEmission"
import MiniForest from "../../components/dashboard/overview/MiniForest"
import MiniLeaderboard from "../../components/dashboard/overview/MiniLeaderboard"
import Header from '../../components/dashboard/Header'

const baseURL = "https://fevu7x9mx0.execute-api.ap-southeast-1.amazonaws.com/RX/user";

const Overview = () => {

    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);
    const [numDeliveries, setNumDeliveries] = useState(60);
    const [numTumpangs, setNumTumpangs] = useState(16);
    const [co2Emission, setCo2Emission] = useState(15000);
    const [co2Saved, setCo2Saved] = useState(5000);

    //get userId of authenticated user
    const history = useHistory();
    const [user, setUser] = useState();
    const check = async() => {
        try{
            const { attributes } = await Auth.currentAuthenticatedUser();
            setUser(attributes);
        }
        catch(e){
            history.push('/login')
        }
    };

    // get user details
    // useEffect( () => { 
    //     check(); 

    //     const userId = user?.["sub"];

    //     axios.post(`/get_user`, {
    //         user_id: userId
    //     })
    //     .then((res) => {
    //         console.log(res.data)
    //     });
    // }, []);


    // FOR TESTING CORS - get emission history 2
    useEffect(() => {
        check();
        const userId = user?.["sub"];
        console.log(userId)
        axios.post(`/tumpang/emission_history2`, {
            user_id: userId,
            month_range: 6
        })
        .then((res) => {
            console.log(res.data)
        });
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
