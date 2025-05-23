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
    <aside className="fixed top-0 left-0 h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-green-700 text-white w-64 p-6 flex flex-col shadow-xl rounded-r-2xl z-50">
      <div className="text-2xl font-extrabold mb-8 tracking-wide text-center">🌊 Marine Portal</div>
      <nav className="flex-1">
        <ul>
          {navLinks.map(link => (
            <li key={link.to} className={location.pathname === link.to ? 'font-bold' : ''}>
              <Link
                to={link.to}
                className="block py-2 px-2 rounded hover:bg-blue-800 transition text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={onLogout}
        className="mt-8 bg-white text-blue-800 font-bold py-2 rounded shadow hover:bg-blue-100 transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
