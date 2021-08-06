import axios from 'axios'
import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router"

import Header from '../../components/dashboard/Header'

const Leaderboard = () => {

    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);
    const [leaderboardData, setLeaderboardData] = useState(
        [{rank: 1, name: "Jonathan", carbonSaved: 1000, treePoints: 400},
         {rank: 2, name: "Arvin", carbonSaved: 600, treePoints: 200},
         {rank: 3, name: "Bing Yu", carbonSaved: 400, treePoints: 100}]
    )

    const history = useHistory();  

    // get current authenticated user details
    const setData = async() => {
        try{
            const { attributes } = await Auth.currentAuthenticatedUser();
            console.log(attributes);
            const userId = attributes.sub;
            const user = await axios.post(`/user/get_user`, {user_id: userId});
            
            // set user attributes
            setName(user.data.name);
            setTreePoints(user.data.tree_points);

            const leaderboard = await axios.post(`/user/leaderboard`, {page: 1});
            const leaderboardArray = [];
            leaderboard.data.forEach((element, index) => {
                leaderboardArray.push({rank: index + 1, name: element.name, carbonSaved: element.carbon_saved, treePoints:element.tree_points});
            })
            setLeaderboardData(leaderboardArray);

        }
        catch(e){
            history.push('/login')
            console.log(e);
        }
    };
    useEffect(() => {
        setData();
    }, []);


    return (
        <div>
            <Header pageTitle="Leaderboard" name={name} treePoints={treePoints} />

            <div className="p-8 h-screen">
                <h1 className="text-2xl font-bold">Tumpang Kings</h1>
                <p className="text-gray-500 text-sm pt-4">All time</p>

                <table className="text-left mt-8 w-full">
                    <thead>
                        <tr>
                            <th className="w-1/4"></th>
                            <th className="w-1/4"></th>
                            <th className="w-1/4 text-sm text-gray-400">Carbon Emissions Saved</th>
                            <th className="w-1/4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map(item => 
                            <tr key={`${item.rank}-row`} className="border-b-2 h-16">
                                <td className="text-3xl w-1/4">{item.rank}</td>
                                <td className="w-1/4">{item.name}</td>
                                <td className="w-1/4">{item.carbonSaved}</td>
                                <td className="w-1/4">
                                    <div className="flex">
                                        {item.treePoints}
                                        <img alt="tree points" className="h-4 w-4 ml-2 mt-1"src={require("../../assets/svg/tree.png").default} />
                                    </div>
                                </td>                            
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}

export default Leaderboard
