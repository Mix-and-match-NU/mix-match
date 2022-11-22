import { avatarClasses } from "@mui/material";

import { useMutation } from "@apollo/client";
import { LIKE_USER } from "../utils/mutations";

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

  if (!users || users.length === 0) {
    return <h3>No Users Yet</h3>;
  }

  const handleLike = async (userId) => {
    console.log("submitted user", userId);
    try {
      const { data } = await likeUser({
        variables: { userId: userId },
      });
      console.log("it is this data", data);
    } catch (e) {
      console.error(JSON.stringify(e, null, 2));
    }
  };

  return (
    <>
      <div className="userCard">
        <div className="outerUserCard">
          {users &&
            users.map((user) => (
              <Card key={user._id}>
                <CardContent>
                  <Stack direction="row">
                  
                  <Avatar
                    alt="user"
                    // src={user.avatar[0].thumbnail}
                    sx={{ bgcolor: deepPurple[500] }}
                  ></Avatar>
                  {/*Like and Dislike Button*/}
                  <Button onClick={() => handleLike(user._id)} color="primary">
                    Like
                  </Button>
                  </Stack>
                  <Stack direction="row">
                  <Typography>
                    {user.first_name} {user.last_name}
                  </Typography>
                  <Typography>{user.username}</Typography>
                  <Typography>{user.age}</Typography>
                  <Typography>{user.location}</Typography>
                  </Stack>
                  {/* Needs playlist */}
                  <Playlist userId={user._id} />
                  Like and Dislike Button
                  <Button onClick={() => handleLike(user._id)} color="primary">
                    Like
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default SingleUser;
