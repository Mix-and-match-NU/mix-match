// React
import React from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SingleUser from "../components/SingleUser";

import Auth from "../utils/auth";

// Importing data from queries, which is calling from backend
import { QUERY_MATCHES,QUERY_ME } from "../utils/queries";

// Question data

export default function Matches() {
  //! User Info
  const { meLoading, meError, me } = useQuery(QUERY_ME)
  const { loading, error, data } = useQuery(QUERY_MATCHES,
    {variables: { userId: me.me._id }}
    );

  if(meLoading || loading) {
    return <h2>Loading...</h2>
  }
  // console.log(userId ? 'query_single' : 'QUERY_ME')

  if (data) {
    console.log("this is data", data);
    console.error(JSON.stringify(error, null, 2));
  }
  // console.log('userId')

  const users = data?.matches
  // console.log('new user data',user)
  // const avatar = user?.avatar || {};

  return (
    <div>
        <SingleUser users={users} />
    </div>
  );
}
