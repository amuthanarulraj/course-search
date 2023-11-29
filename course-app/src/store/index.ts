import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from './slices/course-slice';

 export const store = configureStore({
    reducer: {
        courses: coursesReducer
    }
 });
