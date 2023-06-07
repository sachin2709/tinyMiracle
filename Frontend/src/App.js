import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './components/Community';
import Session from './components/Session';
import Home from './components/Home';
import People from './components/People';
import Community_AllSession from'./components/Community_AllSession';
import Community_Session_People from'./components/Community_Session_People';
import Session_AllCommunity from'./components/Session_AllCommunity';
import Session_Community_People from'./components/Session_Community_People';

function App() {
  const sessionId = 2;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/session" element={<Session />} />      
        <Route path="/community_allsession/:communityId" element={<Community_AllSession />} /> 
        <Route path="/people" element={<People sessionId={sessionId} />} /> 
        <Route path="/community_session_people/:sessionId" element={<Community_Session_People />} /> 
        <Route path="/session_allcommunity/:sessionId" element={<Session_AllCommunity />} /> 
        <Route path="/session_community_people/:communityId" element={<Session_Community_People />} /> 

      </Routes>
    </Router>
  );
}

export default App;
