import React from 'react'
import Landing from '../../components/public/Landing'
import Navbar from '../../components/public/Navbar'


const Home = () => {
    return (
        <div className='h-screen w-screen bg-green'>
            <img alt="food1" className="absolute object-cover top-48 right-48 rounded-full bg-white h-96 w-96 flex items-center justify-center..." src={require("../../assets/img/food_1.jpg").default} />
            <img alt="food2" className="absolute object-cover bottom-52 right-0 -mr-8 rounded-full bg-white h-72 w-72 flex items-center justify-center..." src={require("../../assets/img/food_2.jpg").default} />
            <img alt="food3" className="absolute object-cover bottom-7 right-40 rounded-full bg-white h-56 w-56 flex items-enter justify-center..." src={require("../../assets/img/food_3.jpg").default} />

            <Navbar isDark={true}/>
            <Landing />
        </div>
    )
}

export default Home
