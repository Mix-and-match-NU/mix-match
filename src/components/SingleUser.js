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
        <div key={user._id}>{user.username}</div>
      ))}</div>
    </>
  );
}

export default SingleUser;
