import UserDropdown from "./UserDropdown";

export default function Header({ pageTitle }) {
    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between px-4 divide-x-2">

                    {/* Page Title */}
                    <h1 className="font-semibold uppercase inline-block">
                        {pageTitle}
                    </h1>

                    {/* Search bar */}
                    {/* <form className="flex flex-row flex-wrap items-center ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                        <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
                        </div>
                    </form> */}

                    {/* User */}
                    <ul className="pl-8 flex-col md:flex-row list-none items-center hidden md:flex">
                    <li>
                        <h3 className="text-lg font-sans">Arvin Aik</h3>
                        <ul className='flex flex-row items-center'>
                            <p className='pr-2'>17,000</p>
                            <img alt="tree points" className="h-4 w-4 "src={require("../../assets/svg/tree.png").default} />
                        </ul>
                    </li>
                    
                <li className='pl-4'>
                    <UserDropdown />
                </li>
                </ul>
                </div>
            </nav>
            {/* End Navbar */}
            </>
        );
    }
