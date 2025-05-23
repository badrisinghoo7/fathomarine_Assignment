import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const WelcomeCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 overflow-x-auto">
      <table className="min-w-full">
        <tbody>
          <tr>
            <td className="py-2 px-4 font-bold text-gray-700 w-32">User</td>
            <td className="py-2 px-4 text-lg">{user?.email || 'User'}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 font-bold text-gray-700">Greeting</td>
            <td className="py-2 px-4 text-lg">👋 Welcome!</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-bold text-gray-700">Message</td>
            <td className="py-2 px-4">Here is your marine dashboard overview.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WelcomeCard;
