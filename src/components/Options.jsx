import { useQuestion } from "../context/QuestionContext";

function Options({ question }) {
  const { answer, dispatch } = useQuestion();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, ind) => (
        <button
          className={`btn btn-option ${ind === answer ? `answer` : ``} ${
            hasAnswered
              ? ind == question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: ind })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
