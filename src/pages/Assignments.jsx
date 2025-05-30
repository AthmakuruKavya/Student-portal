import React, { useState } from 'react';
import './Assignments.css'; 

function Assignments() {
  const [courseFilter, setCourseFilter] = useState('');
  const [assignmentFilter, setAssignmentFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const ongoingAssignments = [
    { id: 'MA101-HW2', courseId: 'MA101', title: 'Integration Problems', dueDate: '2024-04-25' },
    { id: 'CS101-P2', courseId: 'CS101', title: 'Data Structures Project', dueDate: '2024-05-10' },
  ];

  const completedAssignments = [
    { id: 'CS101-A1', courseId: 'CS101', title: 'Algorithm Design', submittedOn: '2024-03-14' },
    { id: 'PH102-L3', courseId: 'PH102', title: 'Lab Report: Optics', submittedOn: '2024-03-30' },
  ];

  const filterAssignments = (list) => {
    return list.filter(item =>
      item.courseId.toLowerCase().includes(courseFilter.toLowerCase()) &&
      item.id.toLowerCase().includes(assignmentFilter.toLowerCase())
    );
  };

  const filteredOngoing = filterAssignments(ongoingAssignments);
  const filteredCompleted = filterAssignments(completedAssignments);

  return (
    <div className="dashboard">
      <h2>Assignments</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Filter by Course ID"
          value={courseFilter}
          onChange={e => setCourseFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Assignment ID"
          value={assignmentFilter}
          onChange={e => setAssignmentFilter(e.target.value)}
        />
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>
      </div>

      {(statusFilter === 'All' || statusFilter === 'Ongoing') && (
        <>
          <h5>Ongoing Assignments</h5>
          {filteredOngoing.length === 0 ? (
            <p>No ongoing assignments match the current filters.</p>
          ) : (
            <table className="assignment-table">
              <thead>
                <tr>
                  <th>Assignment ID</th>
                  <th>Course ID</th>
                  <th>Title</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredOngoing.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.courseId}</td>
                    <td>{item.title}</td>
                    <td>{item.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}

      {(statusFilter === 'All' || statusFilter === 'Completed') && (
        <>
          <h5>Completed Assignments</h5>
          {filteredCompleted.length === 0 ? (
            <p>No completed assignments match the current filters.</p>
          ) : (
            <table className="assignment-table">
              <thead>
                <tr>
                  <th>Assignment ID</th>
                  <th>Course ID</th>
                  <th>Title</th>
                  <th>Submission Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredCompleted.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.courseId}</td>
                    <td>{item.title}</td>
                    <td>{item.submittedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
}

export default Assignments;
