//import createSlice
import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

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
            cardIds: action.payload.cardIds
        }
            state.quizzes[action.payload.id] = newQuiz;
        }
    }
});

//action creator with thunk that dispatches 2 actions one after another
export const addQuizIdAndQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuizId(payload));
        dispatch(addQuiz({topicId: payload.topicId, id: payload.id}));
    }
};


//exports from selector, action and reducer
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducers;