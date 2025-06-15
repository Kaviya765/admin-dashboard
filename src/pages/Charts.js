import React from 'react';

function Charts() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Performance Analytics</h2>
      <p>Visual breakdown of key metrics and performance indicators:</p>
      <div style={{ marginTop: '20px' }}>
        <h4>Team Productivity (Last 7 Days)</h4>
        <div style={{ background: '#dff0d8', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <p>Tasks Completed: <strong>46</strong></p>
          <p>Average Completion Time: <strong>3.4 hrs</strong></p>
        </div>
        <h4 style={{ marginTop: '30px' }}>Sales Overview</h4>
        <p>Total Revenue: <strong>$12,450</strong> | Orders: <strong>87</strong></p>
      </div>
    </div>
  );
}

export default Charts;