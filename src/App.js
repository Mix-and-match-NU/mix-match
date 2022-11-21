import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Matches from "./Pages/Matches";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./Pages/Profile";
import QuestionList from "./components/QuestionList";
import { questionData } from "./data/questionData";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

// Import theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#080705",
      contrastText: "#fff6f7",
    },
    secondary: {
      main: "#DB2B39",
    },
    background: {
      default: "#3B1760",
      // paper: '#080705',
    },
    error: {
      main: "#DB2B39",
    },
    info: {
      main: "#7BA6CB",
    },
  },
});

// Back to top functionality
function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// Construct our main GraphQL API endpoint
const url =
  process.env.NODE_ENV === "development"
    ? "/graphql"
    : "https://mix-match-backend.herokuapp.com/graphql";
const httpLink = createHttpLink({
  uri: url,
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  console.log("app token", token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="flex-column justify-flex-start min-100-vh" >
        <Navbar />
        <div className="container">
             <Routes>
               <Route 
                 path="/" 
                 element={<Home />} 
               />
               <Route 
                 path="/Login" 
                 element={<Login />} 
               />
               <Route 
                 path="/Signup" 
                 element={<Signup />}/>
               <Route 
                 path="/Profile" 
                 element={<Profile data={questionData} />}/>
               <Route 
                 path="/QuestionList" 
                 element={<QuestionList data={questionData} />}/>
               <Route 
                 path="/Matches" 
                 element={<Matches />}/>
              </Routes>
             
        </div>
      </div>
        
      </BrowserRouter>
    </ApolloProvider>

    </ThemeProvider>
  );
}

export default App;
