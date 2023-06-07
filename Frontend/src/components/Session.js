import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css"
const Session = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/sessions');
        setSessions(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="product-list">
      <h2>All Sessions</h2>
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
            <tr key={session._id}>
              <td>{session.session_id}</td>
              <td>{session.name}</td>
              <td>{session.voluntary}</td>
              <td>
                <Link to={`/session_allcommunity/${session.session_id}`}>
                  More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Session;
