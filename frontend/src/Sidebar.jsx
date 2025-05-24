import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const location = useLocation();
  const navLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/marine-data', label: 'Marine Data' },
    { to: '/crew', label: 'Crew List' },
    { to: '/reports', label: 'Reports' },
    { to: '/settings', label: 'Settings' },
    { to: '/notifications', label: 'Notifications' },
    { to: '/support', label: 'Support' },
    { to: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="w-full bg-green-700 text-white flex items-center px-8 py-4 shadow-lg">
      <div className="text-xl font-extrabold mr-8 flex-shrink-0">🌊 Marine Portal</div>
      <ul className="flex flex-1 space-x-6">
        {navLinks.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`px-3 py-2 rounded hover:bg-green-800 transition text-base ${
                location.pathname === link.to ? 'bg-green-800 font-bold' : ''
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={onLogout}
        className="ml-8 bg-white text-green-800 font-bold py-2 px-4 rounded shadow hover:bg-green-100 transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Sidebar;
