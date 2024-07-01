import {createSlice} from '@reduxjs/toolkit'

const initialState =  {
    objectPlaces: [
        { name:'어떤 회식자리에 가시나요?', answer: '회식자리' },
        { name:'어떤 회식자리에 가시나요?', answer: '친구들과의 자리'},
        { name:'어떤 회식자리에 가시나요?', answer: '가족들과의 자리' },
        { name:'어떤 회식자리에 가시나요?', answer: '혼술하기 좋은'}
    ],
    pickPlaces : [],
}

const placeSlice = createSlice({
    name:'place',
    initialState,
    reducers: {
        pickPlace: (state, action) => {
            const  { name , answer } = action.payload;
            const objectPlace = state.objectPlaces.find(objectPlace => objectPlace.name === name);
            if (objectPlace && objectPlace.answer === answer) {
                state.pickPlaces.push(objectPlace);
            }

        }
    }
})

export const {pickPlace} = placeSlice.actions

export default placeSlice.reducer