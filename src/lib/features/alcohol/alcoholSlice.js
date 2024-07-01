import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cards: [
        {name: '소주', answer:'소주',},
        {name: '맥주 및 하이볼',  answer:'맥주 및 하이볼'},
        {name: '양주',  answer:'양주' },
        {name: '막걸리 및 증류주' ,  answer:'막걸리 및 증류주'},
    ],
    pickCards: [],
    mixCards:[]

}

const alcoholSlice = createSlice({
        name: 'alcohol',
        initialState,
        reducers: {
            pickCard: (state , action) => {
                const { name, answer } = action.payload;
                const card = state.cards.find(card => card.name === name);
                if (card && card.answer === answer) {
                    state.pickCards.push(card);
                }

            }
        }
    });

export const {pickCard} = alcoholSlice.actions
export default alcoholSlice.reducer