import React from 'react'

function Navbar({ currentPage, handlePageChange }){
    return (
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
                <a href="#Singnup" 
                    onClick={() => handlePageChange('Signup')}
                    className={currentPage ==='Signup'}>
                    Sign up
                </a>
            </li>
        </nav>
    )
}

export default Navbar