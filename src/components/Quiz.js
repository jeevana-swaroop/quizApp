import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
//import { type } from "@testing-library/user-event/dist/type";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const url = "https://opentdb.com/api.php?amount=10&encode=url3986";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "LOADED_QUESTIONS", payload: data.results })
      );
  });

  return (
    <div className="quiz">
      {!quizState.showResult && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => {
              console.log("quizState", quizState);
              dispatch({ type: "NEXT_QUESTION" });
            }}
          >
            Next Question
          </div>
        </div>
      )}
      {quizState.showResult && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You got {quizState.correctAnswerCount} out of{" "}
              {quizState.questions.length}{" "}
            </div>
          </div>

          <div
            className="next-button"
            onClick={() => {
              dispatch({ type: "RESTART" });
            }}
          >
            Restart
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
