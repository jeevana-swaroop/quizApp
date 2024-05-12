import { createContext, useReducer } from "react";
import questions from "../data.js";

export const QuizContext = createContext();

const initstate = {
  currentQuestionIndex: 0,
  questions: questions,
  showResult: false,
};

const reducer = (state, action) => {
  const showResult = state.currentQuestionIndex === state.questions.length - 1;

  const currentQuestionIndex = showResult
    ? state.currentQuestionIndex
    : state.currentQuestionIndex + 1;

  if (action.type === "NEXT_QUESTION") {
    return { ...state, currentQuestionIndex: currentQuestionIndex };
  }
  return state;
};

export const QuizProvider = ({ child }) => {
  const value = useReducer(reducer, initstate);

  return <QuizContext.Provider value={value}>{child}</QuizContext.Provider>;
};
