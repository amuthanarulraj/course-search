import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';
import Course from './models/course';
import * as courseService from './services/course-service';
import CourseTable from './home/CourseTable/CourseTable';
import CourseSearch from './home/CourseSearch/CourseSearch';
import NavBar from './home/NavBar/NavBar';

const initialState: Course[] = [];
// Hook
function App() {
  const [courseList, setCourses] = useState(initialState);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    courseService.search()
      .then((courses) => setCourses(courses));
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
        <CourseTable courses={courseList.filter(c => c.name.startsWith(filter))}></CourseTable>
      </Container>
    </div>
  );
}

export default App;
