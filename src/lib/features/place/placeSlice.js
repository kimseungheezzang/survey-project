import {createSlice} from '@reduxjs/toolkit'

const initialState =  {
    objectPlaces: [
        {name:'어떤 회식자리에 가시나요?', answer:'회식자리'},
        {name:'어떤 회식자리에 가시나요?', answer: '친구들과의 자리'},
        {name:'어떤 회식자리에 가시나요?', answer: '가족들과의 자리' },
        {name:'어떤 회식자리에 가시나요?', answer: '혼술하기 좋은'}
    ],
    pickObjects : [],
}

const placeSlice = createSlice({
    name:'objectPlace',
    initialState,
    reducers: {
        pickObject:(state, action) =>{
            const {name , answer} = action.payload;
            const objectPlace = state.objectPlaces.find(objectPlace => objectPlace.name === name);
            if (objectPlace && objectPlace.answer === answer) {
                state.pickObjects.push(objectPlace);
            }

        }
    }
})

export const {pickObject} = placeSlice.actions

export default placeSlice.reducer