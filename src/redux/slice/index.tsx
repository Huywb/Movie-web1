import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieDataType, moviesData } from "../../assets/data";



interface MovieState {
    movies: MovieDataType[]
}

const MovieList: MovieDataType[] = moviesData

const initialState: MovieState  = {
    movies: MovieList
}


const movieSlice = createSlice({
    name: 'movie',
    initialState, 
    reducers:{
        isBookmark:(state,action :PayloadAction<string> )=>{
            state.movies = state.movies.map((movie: MovieDataType) => {
                if (movie.id === action.payload) {
                    return { ...movie, isBookmarked: !movie.isBookmarked };
                }
                return movie;
            });
        },
        isTrending:()=>{

        }
        
    }
})

export const {isBookmark,isTrending} = movieSlice.actions
export default movieSlice.reducer