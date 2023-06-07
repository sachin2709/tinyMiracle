import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../App.css"
const Session_Community_People = () => {
  const { communityId } = useParams();
  const [people, setPeople] = useState([]);
  

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/attendees_community_people/${communityId}`);
        setPeople(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSessions();
  }, [communityId]);

  return (
    <div className="product-list">
      <h2>People Attendees for Community ID: {communityId}</h2>
      <table>
        <thead>
          <tr>
            <th>Person ID</th>
            <th>Name</th>
            {/* <th>Community</th> */}
            <th>Improvement</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.people_id}>
              <td>{person.people_id}</td>
              <td>{person.name}</td>
              {/* <td>{person.community_id}</td> */}
              <td>{person.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Session_Community_People;