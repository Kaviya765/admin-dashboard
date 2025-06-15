import React from 'react';
import './Table.css';

function Table() {
  const data = [
    { name: "Alice", role: "Developer", status: "Active" },
    { name: "Bob", role: "Designer", status: "Inactive" },
    { name: "Charlie", role: "Manager", status: "Active" },
    { name: "Daisy", role: "QA Tester", status: "Pending" },
  ];

  return (
    <div className="table-container">
      <h2 className="table-title">Team Member Status</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member, index) => (
            <tr key={index} className={member.status.toLowerCase()}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td>{member.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;