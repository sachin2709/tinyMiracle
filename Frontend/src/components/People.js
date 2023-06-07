import React, { useEffect, useState } from 'react';
import axios from 'axios';

const People = ({ sessionId }) => {
  const [attendees, setAttendees] = useState([]);
  useEffect(() => {
    const fetchSessionAttendees = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/attendees_people/${sessionId}`);
        setAttendees(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchSessionAttendees();
  }, [sessionId]);

  return (
    <div>
      <h2>Session Attendees for Session ID: {sessionId}</h2>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee._id}>{attendee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;