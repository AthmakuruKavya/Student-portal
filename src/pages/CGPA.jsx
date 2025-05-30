import React from 'react';
import './CGPA.css'; 

function CGPA() {
  const completedCourses = [
    { name: 'Intro to Programming', credits: 3, grade: 'A', points: 10 },
    { name: 'Calculus I', credits: 4, grade: 'B+', points: 9 },
    { name: 'Physics for Engineers', credits: 3, grade: 'A-', points: 9.5 },
    { name: 'Basic Chemistry', credits: 2, grade: 'B', points: 8 },
    { name: 'Basic Electrical Engg.', credits: 3, grade: 'C+', points: 7 },
  ];

  const currentCGPA = 8.77;

  return (
    <div className="dashboard">
      <h2>CGPA Calculator</h2>

      <div className="cgpa-box text-dark text-center">
        Your Current CGPA is: <span className='text-primary'>{currentCGPA}</span>
      </div>

      <h5>Completed Courses Considered:</h5>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Grade Points</th>
          </tr>
        </thead>
        <tbody>
          {completedCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
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

export default CGPA;
