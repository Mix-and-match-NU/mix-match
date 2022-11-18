import { questionData } from "../data/questionData";

function Question({ question, list }) {
  // // const { treat } = props
console.log(question, "question test in question.js")
  return (
    <>
      <div key={question.id}>
        <h5>{question.text}</h5>
      </div>
    </>
  );
}

export default Question;
