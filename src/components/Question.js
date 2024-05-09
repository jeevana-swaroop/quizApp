import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState] = useContext(QuizContext);

  return (
    <div>
      <div className="question">{quizState.questions[quizState.currentQuestionIndex].question}</div>
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
