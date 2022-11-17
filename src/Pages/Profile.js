// React
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

// Importing data from queries, which is calling from backend
import { QUERY_SINGLE_USER } from "../utils/queries";

export default function Profile() {
  const userId = "637598e5f34f05402ca7441d";

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });
console.log("USER LOG", userId)

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Avatar */}
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="user"
            src=""
            sx={{ width: 100, height: 100 }}
          />
        </Stack>
      </div>

      {/* Username */}
      <div>
        Welcome, {user}!
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
              Word
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
