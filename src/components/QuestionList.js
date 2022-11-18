import Question from "../Pages/Question";
import { questionData } from "../data/questionData";

function QuestionList() {


  const list = questionData.map((questions) => {
    // console.log("QUESTION LIST", questions);

    return (
      <Question
        key={questions.id}
        question={questions}
      />
    );
  });

  return (
    <>
      <div>{list}</div>
    </>
  );
}

export default QuestionList;
