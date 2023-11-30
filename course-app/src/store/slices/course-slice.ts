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
export const searchCourse = (query: string): ((state: AppState) => CoursesState) => {
    return (state: AppState) => state.courses.filter(c => c.name.startsWith(query));
}
export default courseSlice.reducer;