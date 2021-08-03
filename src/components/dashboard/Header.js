import UserDropdown from "./UserDropdown";

export default function Header({ pageTitle, name, treePoints }) {
    return (
        <>
            {/* Navbar */}
            <nav className="w-full bg-transparent flex items-center p-8">
                <div className="w-full items-center flex justify-between divide-x-2">

                    {/* Page Title */}
                    <h1 className="font-semibold uppercase inline-block">
                        {pageTitle}
                    </h1>

                    {/* User */}
                    <ul className="pl-8 flex-col md:flex-row list-none items-center hidden md:flex">
                    <li>
                        <h3 className="text-lg font-sans">{name}</h3>
                        <ul className='flex flex-row items-center'>
                            <p className='pr-2'>{treePoints.toLocaleString()}</p>
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
