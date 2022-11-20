import React, { useState } from "react";
import Question from "../Pages/Question";
import { questionData } from "../data/questionData";

import { useMutation } from '@apollo/client'
import { ADD_SONG } from '../utils/mutations'

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
      <form className='question-form'>
      <div>{list}</div>
      <button onClick={handleFormSubmit}>
        submit
      </button>
      </form>
    </>
  );
}

export default QuestionList;
