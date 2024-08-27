import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';
import * as courseService from './services/course-service';
import CourseTable from './home/CourseTable/CourseTable';
import CourseSearch from './home/CourseSearch/CourseSearch';
import { loadCourses }  from './store/slices/course-slice';
import { AppDispatch } from './store';

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
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <CourseSearch onSearch={searchHandler}></CourseSearch>
        <CourseTable query={filter}></CourseTable>
      </Container>
    </>
  );
}

export default App;