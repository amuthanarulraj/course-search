import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Course, { courses } from './models/course';
import CourseTable from './home/CourseTable/CourseTable';
import CourseSearch from './home/CourseSearch/CourseSearch';
// Hook
function App() {
  const [courseList, setCourses] = useState([...courses]);
  const searchHandler = (query: string) => {
    const filteredCourses = [...courses].filter(c => c.name.startsWith(query));
    setCourses(filteredCourses);
  }
  return (
    <div>
      <CourseSearch onSearch={searchHandler}></CourseSearch>
      <CourseTable courses={courseList}></CourseTable>
    </div>
  );
}

export default App;
