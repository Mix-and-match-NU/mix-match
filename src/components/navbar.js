import React from 'react'

function Navbar({ currentPage, handlePageChange }){
    return (
        <div className='nav'>
            <nav className='navbar'>
                <li>
                    <a href="#Home" 
                        onClick={() => handlePageChange('Home')} 
                        className={currentPage ==='Home'}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#Profile" 
                        onClick={() => handlePageChange('Profile')}
                        className={currentPage ==='Profile'}>
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#Signup" 
                        onClick={() => handlePageChange('Signup')}
                        className={currentPage ==='Signup'}>
                        Sign up
                    </a>
                </li>
                <li>
                    <a href="#Login" 
                        onClick={() => handlePageChange('Login')}
                        className={currentPage ==='Login'}>
                        Log In
                    </a>
                </li>
            </nav>
        </div>
    )
    
}

export default Navbar