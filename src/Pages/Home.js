import React from 'react'
import { Link } from 'react-router-dom'
import SingleUser from '../components/SingleUser'
import { useQuery } from "@apollo/client"
import {QUERY_USERS } from "../utils/queries"
import Auth from "../utils/auth";


function Home (props) { 
    const { loading, error, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    if (Auth.loggedIn())
    {
    return(
        <div>
            <SingleUser users={users} />
        </div>
)} 
else {
    return (
        <div><h4>Please <Link to="/Signup">Sign Up</Link> or <Link to="/Login">Login</Link> to see existing users.</h4></div>
    )
}

}
export default Home