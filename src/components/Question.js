import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion =
    quizState.questions[quizState.currentQuestionIndex].question;

  return (
    <div>
      <div className="question">{currentQuestion}</div>
      <div className="answers">
        {quizState.answers.map((a, index) => (
          <Answer
            answerData={a}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={
              quizState.questions[quizState.currentQuestionIndex].correctAnswer
            }
            onSelectAnswer={(text) => {
              dispatch({
                type: "SELECT_ANSWER",
                payload: text,
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
