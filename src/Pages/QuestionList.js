import { useState } from "react";
import Question from "./Question";
import { questionData } from "../data/questionData";

function QuestionList() {
  const [question, setQuestion] = useState([]);

  const list = question.map((questions) => {
    console.log("Yummy treats!", questions);

    return (
      <Question
        key={questions.id}
        question={questions}
      />
    );
  });

  return (
    <>
      <div className="container">{list}</div>
    </>
  );
}

export default QuestionList;
