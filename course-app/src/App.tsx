import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';
import { courses } from './models/course';
import CourseTable from './home/CourseTable/CourseTable';
import CourseSearch from './home/CourseSearch/CourseSearch';
import NavBar from './home/NavBar/NavBar';
// Hook
function App() {
  const [courseList, setCourses] = useState([...courses]);
  const searchHandler = (query: string) => {
    const filteredCourses = [...courses].filter(c => c.name.startsWith(query));
    setCourses(filteredCourses);
  }
  return (
    <div>
      <NavBar></NavBar>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <CourseSearch onSearch={searchHandler}></CourseSearch>
        <CourseTable courses={courseList}></CourseTable>
      </Container>
    </div>
  );
}

export default App;
