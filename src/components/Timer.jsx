import { useEffect } from "react";
import { useQuestion } from "../context/QuestionContext";

function Timer() {
  const { secondsRemaining, dispatch } = useQuestion();
  const min = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: `tick` });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {" "}
      {min < 10 && "0"}
      {min}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
