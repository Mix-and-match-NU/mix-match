// React
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Playlist from "../components/Playlist";

// Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";

import Auth from "../utils/auth";

// Importing data from queries, which is calling from backend
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";

// Question data

export default function Profile() {
  //! User Info
  const { userId } = useParams();

  const { loading, error, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // console.log(userId ? 'query_single' : 'QUERY_ME')

  if (data) {
    console.log("this is data", data.me.username);
  }
  // console.log('userId')

  const user = data?.me || data?.user || {};
  // console.log('new user data',user)
  // const avatar = user?.avatar || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.error(JSON.stringify(error, null, 2));
  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    console.log("going to your profile");
    return <Navigate to="/Profile" />;
  }

  //! Question Info

  return (
    <>
      {/* Avatar */}

      <div>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="user"
            sx={{ bgcolor: deepPurple[500], width: 100, height: 100 }}
            // src={avatar.length == null ? "" : user.avatar[0].large}
            // sx={{ width: 100, height: 100 }}
          />
          <div>
            <h2>Welcome, {user.first_name}!</h2>
          </div>
        </Stack>
      </div>

      {/* <div>Welcome, {user.first_name}!</div> */}

      {/* Card */}
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Your Playlist
            </Typography>
            <Typography variant="body2">
              <Playlist />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Submit?</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
