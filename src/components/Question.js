import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex].question

  return (
    <div>
      <div className="question">{currentQuestion}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
