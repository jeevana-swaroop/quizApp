import { createContext, useReducer } from "react";
import questions from "../data.js"

export const QuizContext = createContext();

const initstate = {
  currentQuestionIndex: 0,
  questions: questions,
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
  }
  return state;
};

export const QuizProvider = ({ child }) => {
  const value = useReducer(reducer, initstate);

  return <QuizContext.Provider value={value}>{child}</QuizContext.Provider>;
};
