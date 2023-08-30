import { useQuestion } from "../context/QuestionContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoint, answer } =
    useQuestion();
  // console.log(numQuestion, index);
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        {" "}
        Question <strong>{index}</strong> / {numQuestions}
      </p>
      <p>
        {" "}
        <strong>{points}</strong>/ {maxPossiblePoint}
      </p>
    </header>
  );
}

export default Progress;
