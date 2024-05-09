import {useContext} from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";



const Quiz = () => {
  
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      <div>
        <div className="score">Question {quizState.currentQuestionIndex}/{quizState.questions.length}</div>
        <Question />
        <div
          className="next-button"
          onClick={() => {
            console.log("quizState",quizState)
            dispatch({ type: "NEXT_QUESTION" });
          }}
        >
          Next Question {quizState.currentQuestionIndex}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
