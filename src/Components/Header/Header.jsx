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
                <img className='max-h-[40px]' src='data:image/jpeg;base64,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'></img>
            </Link>
        </div>

        {/* Center Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-6">
                <li>
                    <NavLink
                        to="/"
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

        
        
    </div>
</header>

      </>
    
);
};

export default Header