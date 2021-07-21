import React from 'react'
import { Link } from 'react-router-dom'


//Sidebar and header for Dashboard
const Navbar = () => {

    return (
        <>
            <nav className="md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-transparent flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    
                    {/* Brand */}
                    <Link className="block text-left mr-0 inline-block whitespace-nowrap text-4xl font-bold p-4 px-0" to="/">
                        Tumpang
                    </Link>

                    {/* Navigation */}
                    <div className={"overflow-y-auto overflow-x-hidden h-auto  flex-1 rounded "}>
                        <ul className="flex flex-col list-none">
                        <li className="items-center">
                            <Link
                            className="hover:bg-green-100 text-s uppercase p-4 font-bold block" to="/dashboard">
                                Overview
                            </Link>
                        </li>

                        <li className="items-center">
                            <Link
                            className="hover:bg-green-100 text-s uppercase p-4 font-bold block" to="/dashboard/forest"> 
                                Forest
                            </Link>
                        </li>

                        <li className="items-center">
                            <Link className="hover:bg-green-100 text-s uppercase p-4 font-bold block" to="/dashboard/leaderboard">
                                Leaderboard
                            </Link>
                        </li>

                        <li className="items-center">
                            <Link className="hover:bg-green-100 text-s uppercase p-4 font-bold block" to="/dashboard/settings">
                                Settings
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
