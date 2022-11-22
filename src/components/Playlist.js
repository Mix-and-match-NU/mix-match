import Song from "./Song";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { questionData } from "../data/questionData";

// MUI
import Grid from '@mui/material/Grid'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { QUERY_ME, QUERY_SINGLE_USER } from "../utils/queries";

function Playlist( prop ) {
  const { userId } = prop;
  // console.log(prop)

  // console.log(userId ? QUERY_SINGLE_USER : QUERY_ME)

  const { loading, error, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );
  if (loading) return (<h5>Loading...</h5>)
  
  // console.log(data); 
  console.log(userId)
  const destructuredData = data?.me || data?.user || { playlist: Array(9).fill({
    title: 'No Song Selected',
    artist: 'N/A',
    album: 'N/A',
    year: 'N/A'
  })};
  const songs = destructuredData.playlist;
  // console.log(songs);
  const range = [...Array(9).keys()];
  const playlist = range.map((index) => {
    const questions = questionData[index];
    const song = songs[index]; 
    // console.log(index);
    // console.log("questions", questions);
    // console.log("song", song);
    return (
      <>
        <div className="playlist">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <Typography
                  color="text.secondary"
                  component="div"
                  key={questions.id}
                  question={questions}
                >
                  {questions.text}
                </Typography>
                <div key={song._id}>
                  <div>
                    <Typography
                      variant="subtitle1"
                    >
                      {song.title}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2">
                      {" "}
                      by {song.artist}
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  });

  return (
    <>
      <div>{playlist}</div>
    </>
  );
}

export default Playlist;
