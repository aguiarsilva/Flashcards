//import createSlice
import { createSlice } from "@reduxjs/toolkit";

//create slice and action
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const newQuiz = {
            id: action.payload.id, 
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardsIds: action.payload.cardsIds
        }
            state.quizzes[action.payload.id] = newQuiz;
        }
    }
});

export const selectQuiz = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducers;