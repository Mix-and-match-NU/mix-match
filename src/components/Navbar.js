// React utils
import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

// MUI
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material";

const Navbar = () => {
  // Navbar auth to display logout button
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // Navbar functionality
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = (theme) => {
    setAnchorElNav(null);
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
       <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <div>
              {Auth.loggedIn() ? (
                <>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Home
                      </Button>
                    </Link>

                    <Link to="/QuestionList" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Create A Mix
                      </Button>
                    </Link>
                    <Link to="/Matches" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        My Matches
                      </Button>
                    </Link>
                    <Link to="/Profile" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Profile
                      </Button>
                    </Link>
                    <Link to="/Login" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={logout}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Logout
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {" "}
                    <Link to="/Login" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/Signup" style={{ textDecoration: "none" }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Box>
                </>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <>
        <div>
          <Button onClick={handleOpen} color="secondary">New Here?</Button>
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
    </>
  );
};

export default Navbar;
