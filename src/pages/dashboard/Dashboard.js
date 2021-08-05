import { Switch, Route } from 'react-router-dom'

import Overview from './Overview'
import Forest from './Forest'
import Leaderboard from './Leaderboard'
import Settings from './Settings'
import Navbar from '../../components/dashboard/Navbar'


const Dashboard = () => {
    
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
