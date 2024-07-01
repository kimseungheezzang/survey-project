import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    location:'',
}


const locationSlice = createSlice({
    name : 'location',
    initialState,
    reducers: {
        patchLocationName: (state, action) =>{
            state.location = action.payload;
        },

    }
})

export const {patchLocationName} = locationSlice.actions
export default locationSlice.reducer