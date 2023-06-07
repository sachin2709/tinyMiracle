import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <ul>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/session">Session</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
