import React, { useState } from "react";
import Question from "../Pages/Question";
import { questionData } from "../data/questionData";

import { useMutation } from '@apollo/client'
import { ADD_SONG } from '../utils/mutations'

import Button from "@mui/material/Button";

const defaultObj = Array(9).fill({
  title: 'No Song Selected',
  artist: 'N/A',
  album: 'N/A',
  year: 'N/A'
})

function QuestionList() {
  const [userResponses, setResponse] = useState(defaultObj)
  const [addSong, { error, data }] = useMutation(ADD_SONG);


  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log('userResponse',userResponses)
    try {
      const response = await addSong({
        variables: {playlist: userResponses}
      })
      window.location.assign('/Profile');
    } catch(e) {
      console.error(JSON.stringify(e,null,2)); 
    }
  }


  const list = questionData.map((questions, index) => {
    // console.log("QUESTION LIST", questions);

    return (
      <Question
        key={questions.id}
        question={questions}
        setResponse={setResponse}
        userResponses={userResponses}
        index={index}
      />
    );
  });

  return (
    <>
    <div className="questionlistpage">
      <form className='question-form'>
      <div>{list}</div>
      <Button onClick={handleFormSubmit} color="primary">
        submit
      </Button>
      </form>
      </div>
    </>
  );
}

export default QuestionList;
