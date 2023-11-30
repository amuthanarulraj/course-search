import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';
import * as courseService from './services/course-service';
import CourseTable from './home/CourseTable/CourseTable';
import CourseSearch from './home/CourseSearch/CourseSearch';
import NavBar from './home/NavBar/NavBar';
import { loadCourses }  from './store/slices/course-slice';
import { AppDispatch } from './store';

// Hook
function App() {
  const [filter, setFilter] = useState('');
  const dispatchLoadCourses = useDispatch<AppDispatch>();
  useEffect(() => {
    courseService.search()
      .then((courses) => dispatchLoadCourses(loadCourses(courses)));
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
