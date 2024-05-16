const Answer = ({
  answerData,
  onSelectAnswer,
  index,
  currentAnswer,
  correctAnswer,
}) => {
  const options = ["A", "B", "C", "D"];

    const isCorrectAnswer = currentAnswer && answerData === correctAnswer;
    const isWrongAnswer = currentAnswer === answerData && currentAnswer !== correctAnswer;

    const correctAnswerClass = isCorrectAnswer? "correct-answer": "";
    const wrongAnswerClass = isWrongAnswer? "wrong-answer": "";
    const disabledClass = currentAnswer? "disabled-answer": "";
  
  return (
    <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}>
      <div className="answer-letter">{options[index]}</div>
      <div className="answer-text" onClick={() => onSelectAnswer(answerData)}>
        {answerData}
      </div>
    </div>
  );
};

export default Answer;
