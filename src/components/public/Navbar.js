import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ isDark }) => {
    return (
        <nav className={`flex pt-4 justify-between items-center h-16 bg-transparent relative text-lg ${isDark ? " text-white" : "text-black"}` } role='navigation'>
            
            <Link to='/' className='pl-8 text-4xl'>Tumpang</Link>
            
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

Navbar.defaultProps = {
    isDark: false
}


Navbar.propTypes = {
    isDark: PropTypes.bool //either dark or light mode
}

export default Navbar
