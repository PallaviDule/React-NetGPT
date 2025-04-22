import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers:{
        toggleGptSearchView: (state, action) =>{
            state.showGptSearch = !state.showGptSearch
        },
        hideGptView: (state, action) => {
            state.showGptSearch = false
        }
    }
});

export default gptSlice.reducer;
export const {toggleGptSearchView, hideGptView} = gptSlice.actions;