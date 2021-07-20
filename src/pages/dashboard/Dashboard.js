import {useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Overview from './Overview'
import Forest from './Forest'
import Leaderboard from './Leaderboard'
import Settings from './Settings'
import Navbar from '../../components/dashboard/Navbar'
import Header from '../../components/dashboard/Header'


const Dashboard = () => {
    const [pageTitle, setPageTitle] = useState('Overview')



    return (
        <>
            <Navbar />

            <div className="relative md:ml-64 bg-blueGray-100">
                <Header pageTitle={pageTitle} />
            </div>

            <div className="pb-24">
            </div>

            <div className="pl-64 w-full">
            <Switch>
                <Route path='/dashboard/forest'>
                    <Forest setPageTitle={setPageTitle} />
                </Route>

                <Route path='/dashboard/leaderboard'>
                    <Leaderboard setPageTitle={setPageTitle} />
                </Route>

                <Route path='/dashboard/settings'>
                    <Settings setPageTitle={setPageTitle} />
                </Route>

                <Route path='/dashboard'>
                    <Overview setPageTitle={setPageTitle} />
                </Route>
            </Switch>
            </div>

        </>
    )
}

export default Dashboard
