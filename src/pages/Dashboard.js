import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>
      <p>Overview of the platform activities, statistics, and quick links.</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '10px', width: '30%' }}>
          <h3>Users</h3>
          <p><strong>1,250</strong> active users</p>
        </div>
        <div style={{ backgroundColor: '#e0ffe0', padding: '20px', borderRadius: '10px', width: '30%' }}>
          <h3>Tasks</h3>
          <p><strong>78</strong> pending, <strong>312</strong> completed</p>
        </div>
        <div style={{ backgroundColor: '#fff0f5', padding: '20px', borderRadius: '10px', width: '30%' }}>
          <h3>Notifications</h3>
          <p><strong>14</strong> unread alerts</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;