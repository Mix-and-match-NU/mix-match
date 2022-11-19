import Song from "./Song"
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

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

// console.log('song stuff', data.me.playlist)
const songList = songs.map(song => {
  console.log(song, "pls work")
 return (
  <div key={song._id}>
  <p>{song.title}</p>
  {/* <p>{song.artist}</p>
  <p>{song.album}</p>
  <p>{song.year}</p> */}
</div>
 )
})

  return (
    <>
    <div>{songList}</div>
    
    
    </>
  );
}

export default Playlist;