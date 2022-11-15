import React from 'react'
import { Link } from 'react-router-dom'


function Navbar({ currentPage, handlePageChange }){
    return (
        <div className='nav'>
            <nav className='navbar'>
                <li>
                    <Link to= "/Home">                
                        Home
                    </Link>
                </li>
                <li>
                    <Link to= '/Profile'> 
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to= '/Signup'> 
                        Sign up
                    </Link>
                </li>
                <li>
                    <Link to= '/Login'> 
                        Log In
                    </Link>
                </li>
            </nav>
        </div>
    )
    
}

export default Navbar