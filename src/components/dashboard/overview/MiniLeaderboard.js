import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const baseURL = "https://fevu7x9mx0.execute-api.ap-southeast-1.amazonaws.com/RX/user";

const MiniLeaderboard = () => {

    const [top1, setTop1] = useState("Yap Bing Yu")
    const [top2, setTop2] = useState("Yap Bing Who")
    const [top3, setTop3] = useState("Yap Bing Me")
    const [top4, setTop4] = useState("Yap Bing He")

    // call api for leaderboard
    // useEffect(() => {
    //     axios.post(`${baseURL}/leaderboard`, {
    //         page: 1
    //     })
    //     .then((res) => {
    //         console.log(res.data)
    //     });
    // }, []);

    // useEffect(() => {
    //     axios.post(`${baseURL}/tumpang/browse`, {
    //         user_latitude: 1.3503241,
    //         user_longitude: 103.9414863
    //     })
    //     .then((res) => {
    //         console.log(res.data)
    //     });
    // }, []);

    
    return (
        <div className="relative h-80 w-full flex flex-col rounded shadow-md border-2 bg-white">
            <div className='p-4 flex justify-between items-center'>
                <h1 className='title'>Leaderboard</h1>
                <Link to="/dashboard/leaderboard" className="text-xs text-green-500">View All</Link>
            </div>

            <h3 className="pl-4 text-xs text-gray-400">This Week</h3>

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
