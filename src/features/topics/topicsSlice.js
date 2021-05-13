//imports
import { createAction, createSlice } from '@reduxjs/toolkit';

//slice creator
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
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
    },
})

//create selector for topics object nested in initialState
export const selectTopics = state => state.topics.topics;