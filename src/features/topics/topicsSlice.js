// import createSlice from redux toolkit
import { createSlice } from "@reduxjs/toolkit";

//create slice and action
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const newTopic = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: [],
            }
            state.topics[action.payload.id] = newTopic;
        },
    }
});


//export topic selection and action
export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;