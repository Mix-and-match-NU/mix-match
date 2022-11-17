import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/Login'>                
                    Login
                </Link>

                <Link to='/Signup'>
                    Sign Up
                </Link>

                <Link to='/Profile'>
                    Profile
                </Link>
                <Link to='/QuestionList'>
                    Question List
                </Link>
            </nav>
        </div>
        // <div className='nav'>
        //     <nav className='navbar'>
        //         <ul>
        //         <li>
        //             <Link to= "/Home">                
        //                 Home
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to= '/Profile'> 
        //                 Profile
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to= '/Signup'> 
        //                 Sign up
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to= '/Login'> 
        //                 Log In
        //             </Link>
        //         </li>
        //         </ul>

        //     </nav>
        // </div>
    )
    
}

export default Navbar;
 