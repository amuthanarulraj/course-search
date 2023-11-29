import { configureStore } from "@reduxjs/toolkit";
import { courseSlice } from './slices/course-slice'

 export const store = configureStore({
    reducer: {
        [courseSlice.name]: courseSlice.reducer
    }
 });

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
