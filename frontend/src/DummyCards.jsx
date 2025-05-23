import React from 'react';

const DummyCards = () => (
  <div className="overflow-x-auto mb-8">
    <table className="min-w-full bg-white rounded-xl shadow text-left">
      <thead>
        <tr>
          <th className="py-3 px-4 text-green-700 font-bold border-b">Metric</th>
          <th className="py-3 px-4 text-green-700 font-bold border-b">Value</th>
          <th className="py-3 px-4 text-green-700 font-bold border-b">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-3 px-4 font-semibold text-gray-800">Crew Members</td>
          <td className="py-3 px-4 text-green-700 font-extrabold text-xl">8</td>
          <td className="py-3 px-4 text-gray-500 text-sm">Total on board</td>
        </tr>
        <tr className="bg-green-50">
          <td className="py-3 px-4 font-semibold text-gray-800">Journeys Completed</td>
          <td className="py-3 px-4 text-indigo-600 font-extrabold text-xl">5</td>
          <td className="py-3 px-4 text-gray-500 text-sm">Successful trips</td>
        </tr>
        <tr>
          <td className="py-3 px-4 font-semibold text-gray-800">Countries Reached</td>
          <td className="py-3 px-4 text-amber-600 font-extrabold text-xl">21</td>
          <td className="py-3 px-4 text-gray-500 text-sm">Destinations visited</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DummyCards;
