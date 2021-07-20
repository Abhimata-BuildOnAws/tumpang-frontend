import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative font-sans' role='navigation'>
            
            <Link to='/' className='pl-8 text-3xl'>Tumpang</Link>

            <div className="pr-8">
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/about'>About Us</Link>
                <Link className='p-4' to='/partners'>Our Partners</Link>
                <Link className='p-4' to='/contact'>Contact Us</Link>
                <Link to='/login' className="p-4 bg-green-500 hover:bg-green-700 text-white font-sans py-2 px-4 rounded">Log In</Link>
            </div>
        </nav>


    )
}

export default Navbar
