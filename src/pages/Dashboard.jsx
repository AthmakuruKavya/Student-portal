import React from 'react';
import Card from '../components/Card';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="row">
        <Card title="Personal Data">
          <p><strong>Name:</strong> Ajay Kumar</p>
          <p><strong>ID:</strong> 123456</p>
          <p><strong>Phone:</strong> 9876543210</p>
          <p><strong>Email:</strong> ajay.k@example.com</p>
        </Card>
        <Card title="Degree Program">
          <p><strong>Program:</strong> B.Tech</p>
          <p><strong>Discipline:</strong> CSE</p>
          <p><strong>Join Date:</strong> 15 Aug 2021</p>
        </Card>
        <Card title="Guardian Data">
          <p><strong>Name:</strong> Mr. Kumar</p>
          <p><strong>Email:</strong> guardian@example.com</p>
          <p><strong>Phone:</strong> 8765432109</p>
          <p><strong>Address:</strong> 123 Street Name, City</p>
        </Card>
      </div>
      <div className="row">
        <Card title="Admin Notifications">
          <p><strong>Fees Payment:</strong> Due</p>
          <p><strong>Last Date:</strong> 15 Aug 2024</p>
          <p><strong>Upload Document:</strong> 12th Marksheet</p>
          <p><strong>Status:</strong> Pending</p>
          <p><strong>Pending Status:</strong> Clear library dues</p>
        </Card>
        <Card title="Transfer Data">
          <p><strong>Status:</strong> Not Applicable</p>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
