import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GamificationProvider } from './contexts/GamificationContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Quests from './pages/Quests';
import Events from './pages/Events';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';

function App() {
  return (
    <GamificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="quests" element={<Quests />} />
            <Route path="events" element={<Events />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GamificationProvider>
  );
}

export default App;
