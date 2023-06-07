import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../App.css"
const Community_AllSession = () => {
  const { communityId } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/attendees_session/${communityId}`);
        setSessions(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSessions();
  }, [communityId]);

  return (
    < div className="product-list">
      <h2>Sessions for Community ID: {communityId}</h2>
      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Name</th>
            <th>Voluntary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.session_id}>
              <td>{session.session_id}</td>
              <td>{session.name}</td>
              <td>{session.voluntary}</td>
              <td>
              <Link to={`/community_session_people/${session.session_id}`}>More</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Community_AllSession;