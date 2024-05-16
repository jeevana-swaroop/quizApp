import { createContext, useReducer } from "react";
//import questions from "../data.js";
import { normalizeQuestions, shuffleAnswers } from "../helpers.js";

export const QuizContext = createContext();

const initstate = {
  currentQuestionIndex: 0,
  questions: [],
  showResult: false,
  answers: [],
  currentAnswer: "",
  correctAnswerCount: 0,
};

const reducer = (state, action) => {
  const showResult = state.currentQuestionIndex === state.questions.length - 1;

  const currentQuestionIndex = showResult
    ? state.currentQuestionIndex
    : state.currentQuestionIndex + 1;

  const answers = showResult
    ? []
    : shuffleAnswers(state.questions[state.currentQuestionIndex+1]);

  if (action.type === "SELECT_ANSWER") {
    const correctAnswerCount =
      action.payload ===
      state.questions[state.currentQuestionIndex].correctAnswer
        ? state.correctAnswerCount + 1
        : state.correctAnswerCount;
    return {
      ...state,
      currentAnswer: action.payload,
      correctAnswerCount: correctAnswerCount,
    };
  }

  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: currentQuestionIndex,
      showResult: showResult,
      answers: answers,
      currentAnswer: "",
    };
  }

  if (action.type === "RESTART") {
    return initstate;
  }

  if(action.type === "LOADED_QUESTIONS"){

    const normalizedQuestions = normalizeQuestions(action.payload)

    return{

      ...state,
      questions: normalizedQuestions,
      answers: shuffleAnswers(normalizeQuestions[0])

    }

  }

  return state;
};

export const QuizProvider = ({ child }) => {
  const value = useReducer(reducer, initstate);

  return <QuizContext.Provider value={value}>{child}</QuizContext.Provider>;
};
