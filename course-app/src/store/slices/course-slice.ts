import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Course from '../../models/course';

export type CoursesState = Course[];
const initialState: CoursesState = [];
const courseSlice = createSlice({
    name: 'courses',
    initialState: initialState,
    reducers: {
        loadCourses: (state, action: PayloadAction<CoursesState>) => {
            return action.payload;
        }
    }
});
export const { loadCourses } = courseSlice.actions;
export default courseSlice.reducer;