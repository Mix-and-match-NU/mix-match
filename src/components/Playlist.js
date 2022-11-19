import Song from "./Song"
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { questionData } from "../data/questionData";


import { QUERY_ME, QUERY_SINGLE_USER } from "../utils/queries";

function Playlist() {

  const { userId } = useParams();

  const { loading, error, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  const destructuredData = data?.me || data?.user || Array(9);
  const songs = destructuredData.playlist
    console.log(songs)
  const range = [...Array(9).keys()];
  const playlist = range.map(
    index => {
      const questions = questionData[index]
      const song = songs[index]
      console.log(index)
      console.log('questions',questions)
      console.log('song',song)
      return(
        <>
          <h2 key={questions.id} question={questions}>{questions.text}</h2>
          <div key={song._id}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.year}</p> 
          </div>
        </>
      )
    }
  )


  return (
    <>
    <div>{playlist}</div>
    
    
    </>
  );
}

export default Playlist;