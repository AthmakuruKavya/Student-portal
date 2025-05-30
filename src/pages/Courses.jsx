import React from 'react';
import './Courses.css';

function Courses() {
  const courses = [
    { name: 'Intro to Programming', id: 'CS101', credits: 3, grade: 'A', points: 10 },
    { name: 'Calculus I', id: 'MA101', credits: 4, grade: 'B+', points: 9 },
    { name: 'Physics for Engineers', id: 'PH102', credits: 3, grade: 'A-', points: 9.5 },
    { name: 'Basic Chemistry', id: 'CH100', credits: 2, grade: 'B', points: 8 },
    { name: 'Basic Electrical Engg.', id: 'EE101', credits: 3, grade: 'C+', points: 7 },
  ];

  return (
    <div className="dashboard">
      <h2>My Courses</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course ID</th>
            <th>Credit Units</th>
            <th>Student Grade</th>
            <th>Grade Points</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.id}</td>
              <td>{course.credits}</td>
              <td>{course.grade}</td>
              <td>{course.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
