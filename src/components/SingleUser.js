import { avatarClasses } from "@mui/material";
import { QUERY_USERS } from "../utils/queries";

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
  if (!users) {
    return <h3>No Users Yet</h3>;
  }
  console.log(users);

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
                <Button color="primary">Like</Button>
                <Button color="secondary">Dislike</Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
};

export default SingleUser;
