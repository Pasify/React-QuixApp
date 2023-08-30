// import { useEffect, useReducer, useState } from "react";

import Header from "./Header";
import Main1 from "./Main1";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuestion } from "../context/QuestionContext";

function App() {
  const { status } = useQuestion();
  return (
    <div className="app">
      <Header />
      <Main1>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Questions />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </Main1>
    </div>
  );
}

export default App;
