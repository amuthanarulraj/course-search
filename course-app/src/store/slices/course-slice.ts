import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Course from '../../models/course';
import { AppState } from '..';

export type CoursesState = Course[];
const initialState: CoursesState = [];
export const courseSlice = createSlice({
    name: 'courses',
    initialState: initialState,
    reducers: {
        loadCourses: (state, action: PayloadAction<CoursesState>) => {
            return action.payload;
        }
    }
});
export const { loadCourses } = courseSlice.actions;
export const searchCourses = (query: string): ((state: AppState) => CoursesState) => {
    return (state: AppState) => state.courses.filter(c => c.name.startsWith(query));
}
export const findById = (id: string | undefined): ((state: AppState) => Course | undefined) => {
    return (state: AppState) => state.courses.find(c => id && c._id === id);
}
export default courseSlice.reducer;