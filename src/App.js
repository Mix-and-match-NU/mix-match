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

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Profile from './Pages/Profile';
import QuestionList from './Pages/QuestionList';
import { questionData } from './data/questionData';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
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
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="flex-column justify-flex-start min-100-vh" >
        <Navbar />
        <div className="container">
             <Routes>
               <Route 
                 path="/Login" 
                 element={<Login />} 
               />
               <Route 
                 path="/Signup" 
                 element={<Signup />}/>
               <Route 
                 path="/Profile" 
                 element={<Profile />}/>
               <Route 
                 path="/QuestionList" 
                 element={<QuestionList data={questionData} />}/>
              </Routes>
             
        </div>
      </div>
        
      </BrowserRouter>
    </ApolloProvider>

    //   <ApolloProvider client={client}>
    //     <Router>
    //     <div className="flex-column justify-flex-start min-100-vh" >
    //       hello
    //       {/* <Navbar />
    //       <div className="container">
    //         <Routes>
    //           <Route 
    //             path="/Login" 
    //             element={<Login />} 
    //           />
    //           <Route 
    //             path="/Signup" 
    //             element={<Signup />} 
    //           />
    //         </Routes>
    //       </div> */}
    //       <Footer />
    //     </div>
    //     </Router>
    // </ApolloProvider>
  
  );
}

export default App;
