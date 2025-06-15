import React from 'react';
import './Calendar.css';

function Calendar() {
  return (
    <div className="calendar">
      <h2 className="calendar-title">Team Schedule - June 2025</h2>
      <div className="calendar-grid">
        {[...Array(30)].map((_, index) => (
          <div className={`calendar-day ${index % 5 === 0 ? 'highlight' : ''}`} key={index}>
            <span>June {index + 1}</span>
            {index % 5 === 0 && <p>📅 Meeting at 10 AM</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Calendar;