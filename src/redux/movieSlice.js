import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        currentlyPlayingMovieTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addNowPlayingTrailerVideo: (state, action) => {
            state.currentlyPlayingMovieTrailer = action.payload
        }
    }
});

export default movieSlice.reducer;
export const {addNowPlayingMovies, addNowPlayingTrailerVideo} = movieSlice.actions;