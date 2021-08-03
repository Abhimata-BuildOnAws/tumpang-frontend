import { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify';

import Overview from './Overview'
import Forest from './Forest'
import Leaderboard from './Leaderboard'
import Settings from './Settings'
import Navbar from '../../components/dashboard/Navbar'


const Dashboard = () => {
    
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
    useEffect( () => { 
        check(); 
    }, []);
    const userId = user?.["sub"];

    return (
        <>
            <Navbar />

            <div className="pl-64 w-full bg-dashboard">
            <Switch>
                <Route path='/dashboard/forest'>
                    <Forest />
                </Route>

                <Route path='/dashboard/leaderboard'>
                    <Leaderboard />
                </Route>

                <Route path='/dashboard/settings'>
                    <Settings />
                </Route>

                <Route path='/dashboard'>
                    <Overview />
                </Route>
            </Switch>
            </div>

        </>
    )
}

export default Dashboard
