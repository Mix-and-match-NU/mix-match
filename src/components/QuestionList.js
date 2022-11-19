import React, { useState } from "react";
import Question from "../Pages/Question";
import { questionData } from "../data/questionData";


function QuestionList() {
  const [userResponses, setResponse] = useState(Array(9))

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log(userResponses)
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
