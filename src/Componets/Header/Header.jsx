import React from 'react'
import { Link,NavLink } from 'react-router'

function Header() {
  return (
    <>
    <header className="bg-gray-800 text-white">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
            <Link to="/" className="hover:text-gray-300">
                <img className='max-h-[40px]' src='logo2.jpeg'></img>
            </Link>
        </div>

        {/* Center Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-6">
                <li>
                    <NavLink
                        to="/Home"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-bold" : "hover:text-orange-600"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/About"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-bold" : "hover:text-orange-600"
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Contectus"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-bold" : "hover:text-orange-600"
                        }
                    >
                        ContectUs
                    </NavLink>
                </li>
            </ul>
        </nav>

        {/* Log In */}
        <div>
            <NavLink
                to="/Login"
                className={({ isActive }) =>
                    isActive ? "text-gray-300 font-bold" : "hover:text-gray-300"
                } >
                Log In
            </NavLink>
        </div>
        
    </div>
</header>

      </>
    
);
};

export default Header