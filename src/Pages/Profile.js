// React
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Auth from '../utils/auth';

// Importing data from queries, which is calling from backend
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";

export default function Profile() {
  const { userId } = useParams();

  const { loading, error, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { userId: userId },
  });

  // console.log(userId ? 'query_single' : 'QUERY_ME')
  
  if (data) {
    console.log('this is data',data.me.username)
  }
  // console.log('userId')

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.error(JSON.stringify(error,null,2))
  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    console.log('going to your profile')
    return <Navigate to="/me" />;
  }
  return (
    <>
      {/* Avatar */}

      <div>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="user"
            src={user.avatar[0].thumbnail}
            sx={{ width: 100, height: 100 }}
          />
        </Stack>
      </div>
      
      <div>
        Welcome, {user.username}!
      </div>

      {/* Card */}
      <div>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Name: {user.first_name}  {user.last_name} 
            </Typography>
            <Typography variant="h5" component="div">
              benevolent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           benevolent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
