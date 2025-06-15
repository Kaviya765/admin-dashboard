import React from 'react';

function Kanban() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Kanban Board</h2>
      <p>Visual task tracking board for project management:</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1, backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '8px' }}>
          <h4>To Do</h4>
          <ul>
            <li>Design Homepage</li>
            <li>Prepare User Feedback Form</li>
          </ul>
        </div>
        <div style={{ flex: 1, backgroundColor: '#ffe0b2', padding: '10px', borderRadius: '8px' }}>
          <h4>In Progress</h4>
          <ul>
            <li>API Integration</li>
            <li>Payment Gateway Setup</li>
          </ul>
        </div>
        <div style={{ flex: 1, backgroundColor: '#c8e6c9', padding: '10px', borderRadius: '8px' }}>
          <h4>Done</h4>
          <ul>
            <li>Login Page</li>
            <li>Signup Workflow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Kanban;