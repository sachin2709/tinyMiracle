import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../App.css"
function Community() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios.get('http://localhost:5000/communities');
        setCommunities(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCommunities();
  }, []);


  return (
    <div className="product-list">
      <h2>All Communities</h2>
      <table>
        <thead>
          <tr>
            <th>Community ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Coordinator</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {communities.map((community) => (
            <tr key={community._id}>
              <td>{community.community_id}</td>
              <td>{community.name}</td>
              <td>{community.location}</td>
              <td>{community.description}</td>
              <td>{community.coordinator}</td>
              <td>
              <Link to={`/community_allsession/${community.community_id}`}>More</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Community;
