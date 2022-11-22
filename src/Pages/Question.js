// React utils
import { useState } from "react";

// Data 
import { useQuery } from "@apollo/client";
import { QUERY_SONGS } from "../utils/queries";

// MUI
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


function Question({ question, list, setResponse, userResponses, index }) {
  // console.log(question, "question test in question.js");

  const { loading, error, data } = useQuery(QUERY_SONGS);
  // console.log('SONG DATA', data)

  const songs = data?.songs || [];
  // console.log(songs)
  const options = songs.map(song => {
    return(
      {
        id: song._id,
        label : song.title + " By " + song.artist,
        attribute: song.title,
        album: song.album,
        artist: song.artist,
        year: song.year
       }
    )
  })

  console.error(JSON.stringify(error,null,2));

// console.log('give us our songs!!', songs)



  return (
    <>

      {/* Question */}
      <div key={question.id}>
        <h5>{question.text}</h5>
      </div>
      {/* Song Data */}
      <div className="autocomplete1">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          
          renderInput={(params) => <TextField {...params} 
          label="Song" 
          component="div"
          />}
          onChange={(event, newValue) => {
            const restructuredData = {
              title: newValue.attribute,
              artist: newValue.artist,
              album: newValue.album,
              year: newValue.year
            }
            userResponses[index]=restructuredData;
            setResponse(userResponses)
          }}
          />
      </div>
    </>
  );
}

export default Question;
