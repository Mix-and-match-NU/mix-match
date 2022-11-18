import { avatarClasses } from "@mui/material";
import { QUERY_USERS } from "../utils/queries";

const SingleUser = ({
  users,
}) => {
  if (!users) {
    return <h3>No Users Yet</h3>;
  }
  console.log(users)

  return (
    <>
      <div>{users && users.map((user)=> (
        <div key={user._id}>
        <h3>{user.username}</h3> 
        <img alt="headshot" src={user.avatar[0].thumbnail}></img>
        <p>{user.first_name} {user.last_name}</p>
        <p>{user.age}</p>
        <p>{user.location}</p>
        {/* Needs playlist */}
        </div>
      ))}</div>
    </>
  );
}

export default SingleUser;
