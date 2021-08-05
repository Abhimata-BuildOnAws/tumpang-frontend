import React from 'react'
import Navbar from '../../components/public/Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen flex flex-col justify-center items-center bg-yellow-300'>
                <h1 className="text-9xl uppercase font-black mx-16">Do you know your carbon foodprint?</h1>
                <p className="mx-16 mb-16">
                    Do you know how much your deliveries impact the environment? 
                    Repetitive deliveries come at a high cost to our environment, 
                    as they produce high carbon emissions and waste. A British study 
                    concluded that spending just US$ 70 a week on food deliveries 
                    (equivalent to ordering in 4 times) translates into a 450% increase 
                    in one's carbon footprint.
                </p>

                <h1 className="text-4xl uppercase font-black mx-16">Sharing Is Caring (for the environment)</h1>
                <p className="mx-16">
                    The tumpang app not only offers you increased tracking and visualised data 
                    for your impact on the environment. It also provides you a way to enjoy the 
                    convenience of food delivered to your house!                
                </p>

            </div>
        </>
        )
}

export default About
