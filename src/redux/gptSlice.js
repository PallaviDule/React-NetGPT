import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        moviesName: null,
        gptMoviesResult: null
    },
    reducers:{
        toggleGptSearchView: (state, action) =>{
            state.showGptSearch = !state.showGptSearch
        },
        hideGptView: (state, action) => {
            state.showGptSearch = false
        },
        addGptMovieSearchResult: (state, action) => {
            const {moviesName, movieResult} = action.payload;
            state.gptMoviesResult = movieResult;
            state.moviesName = moviesName;
        }

    }
});

export default gptSlice.reducer;
export const {toggleGptSearchView, hideGptView, addGptMovieSearchResult} = gptSlice.actions;