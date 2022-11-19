import { gql } from '@apollo/client';

//Login user mutation
//May need additional fields - only passed the username and id in the query for testing
//backend only calls for "name" please verify that name is needed instead of username***
export const LOGIN_USER = gql` 
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;


//User sign-up
// Sign up requires all of the user data - possible refactor if this isn't the case or if there is another way to pass the request body.
// Check playlist call for syntax - I wasn't super sure this was how to call it.*** 
export const SIGNUP_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(email: $email, username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// add song may only require the user Id and song Id - can debug if there are issues. ***
export const ADD_SONG = gql`

mutation Mutation($userId: String!, $songId: String!, $title: String!, $artist: String!, $album: String!, $year: String!) {
    addSong(userId: $userId, songId: $songId, title: $title, artist: $artist, album: $album, year: $year) {
    _id
    username
    playlist {
        _id
        title
        artist
        album
        year
    }  
    }
}
`;



