import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      username
      password
      first_name
      last_name
      location
      age
      avatar {
        large
        medium
        thumbnail
      }
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

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      avatar {
        large
        medium
        thumbnail
      }
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

export const QUERY_SONGS = gql`
  query getSongs {
    songs {
      _id
      title
      artist
      album
      year
    }
  }
`;

export const QUERY_SINGLE_SONG = gql`
  query getSingleSong($songId: ID!) {
    song(songId: $songId) {
      title
      artist
      album
      year
      genre
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      first_name
      last_name
      location
      age
      avatar {
        large
        medium
        thumbnail
      }
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

export const QUERY_MATCHES = gql`
query matches {
  matches {
    _id
    username
    first_name
    last_name
    location
    age
    avatar {
      large
      medium
      thumbnail
    }
    playlist {
      _id
      title
      artist
      album
      year
    }
  }
}`
