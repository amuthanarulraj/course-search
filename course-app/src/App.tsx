import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';

import './App.css';
import Course from './models/course';
import * as courseService from './services/course-service';
import CourseTable from './home/CourseTable/CourseTable';
import CourseSearch from './home/CourseSearch/CourseSearch';
import NavBar from './home/NavBar/NavBar';
import { AppDispatch } from './store';
import { loadCourses } from './store/slices/course-slice';

const initialState: Course[] = [];
// Hook
function App() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    courseService.search()
      .then((courses) => dispatch(loadCourses(courses)));
  }, []);
  const searchHandler = (query: string) => {
    setFilter(query);
  }
  return (
    <div>
      <NavBar></NavBar>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <CourseSearch onSearch={searchHandler}></CourseSearch>
        <CourseTable query={filter}></CourseTable>
      </Container>
    </div>
  );
}

export default App;
