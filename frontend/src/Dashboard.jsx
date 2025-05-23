import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import WelcomeCard from './WelcomeCard';
import DummyCards from './DummyCards';
import MarineData from './MarineData';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 p-8 md:p-16">
        <WelcomeCard />
        <DummyCards />
        <MarineData />
      </main>
    </div>
  );
};

export default Dashboard;
