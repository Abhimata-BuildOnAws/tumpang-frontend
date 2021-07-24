import React from 'react'
import Navbar from '../../components/public/Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen flex justify-center items-center bg-yellow-300'>
                <h1 className="text-9xl uppercase font-black">Do you know your carbon foodprint?</h1>
            </div>
        </>
        )
}

export default About
