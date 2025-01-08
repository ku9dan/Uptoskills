import React from 'react';
import '../App.css';
const TimelineEvent = ({ date, time, title, description, backgroundColor }) => {
  return (
    <div 
      className="timeline-event" 
      style={{ '--event-bg-color': backgroundColor }} // Use CSS variable for dynamic background color
    >
      <h3>{title}</h3>
      <hr></hr>
      <p>{date} | {time}</p>
      <p>{description}</p>
    </div>
  );
};

export default TimelineEvent;