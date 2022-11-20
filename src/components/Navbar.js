// React utils
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";

// MUI
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

// Navbar auth
const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // Modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // Modal functionality
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/Login">Login</Link>

          <Link to="/Signup">Sign Up</Link> */}

          {/* <Link to="/Profile">Profile</Link> */}
          <Link to="/QuestionList">Question List</Link>

          {Auth.loggedIn() ? (
            <>
              <Link to="/Profile">Profile</Link>
              <Button onClick={logout} variant="contained">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/Login">Login</Link>
              <Link to="/Signup">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
      {/* Modal */}
      <div>
        <Button onClick={handleOpen}>New Here?</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Welcome to Mix-n-Match!
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2 }}
                variant="subtitle1"
              >
                Getting started is easy:{" "}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Answer 9 questions related to songs to generate your own
                playlist, then view other users' playlists to see who you've
                matched with!
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
