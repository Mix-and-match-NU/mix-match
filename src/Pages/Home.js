import React from 'react'
import { Link } from 'react-router-dom'
import SingleUser from '../components/SingleUser'
import { useQuery } from "@apollo/client"
import {QUERY_USERS } from "../utils/queries"

function Home (props) { 
    const { loading, error, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
    console.error(JSON.stringify(error,null,2));
    return(
        <div>
            <SingleUser users={users} />
        </div>
)
}
export default Home