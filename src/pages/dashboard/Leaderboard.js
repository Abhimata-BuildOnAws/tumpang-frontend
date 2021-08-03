import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from '../../components/dashboard/Header'

const Leaderboard = () => {

    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);

    // call api for leaderboard
    useEffect(() => {
        axios.post(`/user/leaderboard`, {
            page: 1
        })
        .then((res) => {
            console.log(res.data)
        });
    }, []);


    return (
        <div>
            <Header pageTitle="Leaderboard" name={name} treePoints={treePoints} />

            <div className="p-8 h-screen">
                <h1 className="text-2xl font-bold">Tumpang Kings</h1>
                <p className="text-gray-500 text-sm pt-4">All time</p>

                <table className="table-fixed mt-8">
                    <thead>
                        <tr>
                            <th className="w-1/8">rank</th>
                            <th className="w-1/4">name</th>
                            <th className="w-1/2">Effective CO2 Emission</th>
                            <th className="w-1/4">Tree Points</th>
                        </tr>
                    </thead>

                </table>
            </div>

            
        </div>
    )
}

export default Leaderboard
