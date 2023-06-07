import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../App.css"
const Community_Session_People = () => {
  const { sessionId } = useParams();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/attendees_session_people/${sessionId}`);
        setPeople(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSessions();
  }, [sessionId]);

  return (
    <div className="product-list">
      <h2>People Attendees for Session ID: {sessionId}</h2>
      <table>
        <thead>
          <tr>
            <th>Person ID</th>
            <th>Name</th>
            <th>Community</th>
            <th>Improvement</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.people_id}>
              <td>{person.people_id}</td>
              <td>{person.name}</td>
              <td>{person.community_id}</td>
              <td>{person.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Community_Session_People;