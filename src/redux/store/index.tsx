import { configureStore } from "@reduxjs/toolkit";
import movieSlice from '../slice/index'

export const store = configureStore({
    reducer:{
       movie: movieSlice
    }
})

