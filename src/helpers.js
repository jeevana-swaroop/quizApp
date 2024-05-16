

export function shuffleAnswers(data) {
  const unshuffled = [...data.incorrectAnswers, data.correctAnswer];
  const shuffleAnswers = unshuffled
    .map((a) => ({
      sort: Math.random(),
      value: a,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return shuffleAnswers;
}

export function normalizeQuestions(questionData){

  return questionData.map((each)=>{

    const incorrectAnswers = each.incorrect_answers.map(each=>decodeURIComponent(each))
    return {
      correctAnswer: decodeURIComponent(each.correct_answer),
      question: decodeURIComponent(each.question),
      incorrectAnswers:incorrectAnswers,
    }
  });



}
