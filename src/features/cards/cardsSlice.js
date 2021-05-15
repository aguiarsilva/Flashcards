//import createSlice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

//create slice
export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const newCard = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
            state.cards[action.payload.id] = newCard;
        }
    }
})


//export actions and selectors
export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.action;
export default cardsSlice.reducers;
