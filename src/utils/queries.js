import { gql } from 'apollo/client';

export const QUERY_USERS = gql`
    query Users {
        users {
            _id
            username
            playlist {
                title
                artist
                album
                year
                genre
            }
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query getSingleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            password
        }
    }
`;

export const QUERY_SONGS = gql`
    query getSongs {
        songs {
            title
            artist
            album
            year
            genre
        }
    }
`;

export const QUERY_SINGLE_SONG = gql`
    query getSingleSon($songId: ID!) {
        song (songId: $songId){
            title
            artist
            album
            year
            genre
        }
    }
`;