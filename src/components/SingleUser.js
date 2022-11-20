import { avatarClasses } from "@mui/material";

import { useMutation } from '@apollo/client'
import { LIKE_USER } from '../utils/mutations'


import Playlist from "../components/Playlist";
// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";



const SingleUser = ({ users }) => {
  const [likeUser, { error, data }] = useMutation(LIKE_USER);


  if (!users) {
    return <h3>No Users Yet</h3>;
  }
  console.log(users);

  const handleLike = async (userId) => {
    try {
      const { data } = await likeUser({
        variables: {userId: userId}
      })
      console.log('it is this data',data)
    } catch (e) {
      console.error(JSON.stringify(e, null, 2));

    }
  }


  return (
    <>
      <div className="allUsers">
        {users &&
          users.map((user) => (
            <Card key={user._id}>
              <CardContent>
                <Avatar alt="user" 
                // src={user.avatar[0].thumbnail}
            sx={{ bgcolor: deepPurple[500] }}
                ></Avatar>
                <Typography>
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography>{user.username}</Typography>
                <Typography>{user.age}</Typography>
                <Typography>{user.location}</Typography>
                {/* Needs playlist */}
                <Playlist userId={user._id} />
                {/*Like and Dislike Button*/}
                <Button onClick={() =>handleLike(user._id)} color="primary">Like</Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
};

export default SingleUser;
