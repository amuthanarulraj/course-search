import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from './slices/course-slice'

 export const store = configureStore({
    reducer: {
        [coursesReducer.name]: coursesReducer
    }
 });
