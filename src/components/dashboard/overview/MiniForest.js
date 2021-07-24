import React from 'react'
import { Link } from 'react-router-dom'

const MiniForest = () => {
    return (
        <div className="h-80 w-full rounded shadow-md border-2 bg-white">
            <div className='p-4 flex justify-between items-center'>
                <h1 className='title'>Forest</h1>
                <Link to="/dashboard/forest" className="text-xs text-green-500">View Details</Link>
            </div>

            <div className="flex justify-center">
                <img alt="forest" className="object-cover h-60" src={require("../../../assets/img/forest.png").default} />
            </div>
        </div>    
    )
}

export default MiniForest
