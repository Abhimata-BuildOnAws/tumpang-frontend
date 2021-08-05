import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <div className='my-32 m-32 text-white text-wrap w-1/3 flex flex-col justify-between content-between'>
            <h1 className='text-6xl font-bold mb-14 animate-bounce'>Want to make a difference?</h1>
            <p className=''>Tumpang hopes to save the environment one delivery at a time</p>
            <div className='pt-8 flex flex-row items-center'>
                <Link to='/dashboard' className="p-4 bg-green-500 hover:bg-green-700 font-sans rounded">Get Started</Link>

                <div className="flex flex-row pl-8">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <Link to='/about' className="pl-2 hover:bg-green-700 font-sans rounded">How it works</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
