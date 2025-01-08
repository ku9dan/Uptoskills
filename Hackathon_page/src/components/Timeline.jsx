import React from 'react';
import TimelineEvent from './TimelineEvent';

const Timeline = () => {
  const events = [
    {
      date: '18 Dec - 21 Dec',
      time: '04:00 PM IST - 11:59 PM IST',
      title: 'Registration',
      description: 'Join the innovation wave! Register now to secure your spot and bring your ideas to life.',
    },
    {
      date: '21 Dec - 02 Jan',
      time: '04:00 PM IST - 11:59 PM IST',
      title: 'Team Formation',
      description: 'Build your team to brainstorm ideas and develop innovative solutions.',
    },
    {
      date: '02 Jan - 05 Jan',
      time: '04:00 PM IST - 11:59 PM IST',
      title: 'Idea Submission',
      description: 'Submit your ideas and get ready to present your solutions to the world.',
    },
    {
        date: '05 Jan - 08 Jan',
        time: '04:00 PM IST - 11:59 PM IST',
        title: 'Introduction to Hackathon',
        description: 'Get ready to dive into the world of innovation and creativity.',
    },
    {
        date: '08 Jan - 11 Jan',
        time: '04:00 PM IST - 11:59 PM IST',
        title: 'Hackathon',
        description: 'Develop your ideas and create innovative solutions to real-world problems.',
    },
    {
        date: '11 Jan - 14 Jan',
        time: '04:00 PM IST - 11:59 PM IST',
        title: 'Judging',
        description: 'Present your solutions to the judges and compete for exciting prizes.',
    },
    {
        date: '14 Jan - 17 Jan',
        time: '04:00 PM IST - 11:59 PM IST',
        title: 'Winners Announcement',
        description: 'Celebrate the winners and their innovative solutions.',
    }
    // Add more events here...
  ];

  const colors = ['#E6F4F1', '#FFE6E6']; // Whitish blue and whitish red

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              {...event}
              backgroundColor={colors[index % colors.length]} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;