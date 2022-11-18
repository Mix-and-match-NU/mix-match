// Data 
import { useQuery } from "@apollo/client";
import { QUERY_SONGS } from "../utils/queries";

// MUI
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Question({ question, list }) {
  // console.log(question, "question test in question.js");

  const { loading, error, data } = useQuery(QUERY_SONGS);
  console.log('SONG DATA', data)

  const songs = data?.songs || [];

  const options = songs.map(song => {
    return(
      { label : song.title }
    )
  })

  console.error(JSON.stringify(error,null,2));

console.log('give us our songs!!', songs)


  return (
    <>
      {/* Question */}
      <div key={question.id}>
        <h5>{question.text}</h5>
      </div>
      {/* Song Data */}
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} 
          label="Song" />}
        />
      </div>
    </>
  );
}

export default Question;
