import React from 'react'
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Home from './Pages/Home'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Matches from './Pages/Matches'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './Pages/Profile';
import QuestionList from './components/QuestionList';
import { questionData } from './data/questionData';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Import theme
const theme= createTheme({
  palette: {
    primary: {
      main: '#080705',
      contrastText: '#fff6f7',
    },
    secondary: {
      main: '#DB2B39',
    },
    background: {
      default: '#3B1760',
      // paper: '#080705',
    },
    error: {
      main: '#DB2B39',
    },
    info: {
      main: '#7BA6CB',
    },
  },
})

// const theme= createTheme({
//   palette: {
//     primary: {
//       main: '#3B1760',
//       contrastText: '#fff6f7',
//     },
//     secondary: {
//       main: '#DB2B39',
//     },
//     background: {
//       default: '#181414',
//       paper: '#080705',
//     },
//     text: {
//       primary: '#FFFEFF',
//       secondary: '#e0e0e0',
//     },
//     error: {
//       main: '#DB2B39',
//     },
//     info: {
//       main: '#7BA6CB',
//     },
//   },
// })

// Construct our main GraphQL API endpoint
const url = process.env.NODE_ENV === 'development'
            ? '/graphql' : 'https://mix-match-backend.herokuapp.com/graphql'
const httpLink = createHttpLink({
  uri: url,
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  console.log('app token', token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>    
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
