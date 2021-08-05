import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const MiniLeaderboard = () => {

    const [top1, setTop1] = useState("Yap Bing Yu")
    const [top2, setTop2] = useState("Yap Bing Who")
    const [top3, setTop3] = useState("Yap Bing Me")
    const [top4, setTop4] = useState("Yap Bing He")

    // call API for leaderboard data
    const setData = async() => {
        try{
            const res = await axios.post(`/user/leaderboard`, {page: 1});            
            setTop1(res.data[0].name);
            setTop2(res.data[1].name);
            setTop3(res.data[2].name);
            setTop4(res.data[3].name);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(() => {
        setData();
    }, []);


    
    return (
        <div className="relative h-80 w-full flex flex-col rounded shadow-md border-2 bg-white">
            <div className='p-4 flex justify-between items-center'>
                <h1 className='title'>Leaderboard</h1>
                <Link to="/dashboard/leaderboard" className="text-xs text-green-500">View All</Link>
            </div>

            <h3 className="pl-4 text-xs text-gray-400">All Time</h3>

            <div className="flex justify-between px-4 py-4 pt-7 border-b-2">
                <h1>{top1}</h1>
                <div className="w-16 h-all rounded-full bg-yellow-500 text-center text-white">
                    1ST
                </div>
            </div>

            <div className="flex justify-between px-4 py-4 border-b-2">
                <h1>{top2}</h1>
                <div className="w-16 h-all rounded-full bg-gray-400 text-center text-white">
                    2ND
                </div>
            </div>

            <div className="flex justify-between px-4 py-4 border-b-2">
                <h1>{top3}</h1>
                <div className="w-16 h-all rounded-full bg-yellow-700 text-center text-white">
                    3RD
                </div>
            </div>

            <div className="flex justify-between px-4 py-4">
                <h1>{top4}</h1>
                <div className="w-16 h-all rounded-full bg-gray-300 text-center text-gray-700">
                    4TH
                </div>
            </div>

        </div>    
    )
}

export default MiniLeaderboard
