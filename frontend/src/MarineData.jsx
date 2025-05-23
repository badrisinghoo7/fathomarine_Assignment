import React, { useState } from 'react';

// Extended mock port data
const mockPorts = [
  { name: 'Port of Singapore', code: 'SGSIN', country: 'Singapore', type: 'Container', opened: 1819 },
  { name: 'Port of Rotterdam', code: 'NLRTM', country: 'Netherlands', type: 'Bulk', opened: 1283 },
  { name: 'Port of Los Angeles', code: 'USLAX', country: 'USA', type: 'Container', opened: 1907 },
  { name: 'Port of Shanghai', code: 'CNSHA', country: 'China', type: 'Container', opened: 1842 },
  { name: 'Port of Hamburg', code: 'DEHAM', country: 'Germany', type: 'Container', opened: 1189 },
  { name: 'Port of Antwerp', code: 'BEANR', country: 'Belgium', type: 'Bulk', opened: 1120 },
  { name: 'Port of Busan', code: 'KRPUS', country: 'South Korea', type: 'Container', opened: 1876 },
  { name: 'Port of Valencia', code: 'ESVLC', country: 'Spain', type: 'Container', opened: 1483 },
  { name: 'Port of Santos', code: 'BRSSZ', country: 'Brazil', type: 'Bulk', opened: 1892 },
  { name: 'Port of Jebel Ali', code: 'AEJEA', country: 'UAE', type: 'Container', opened: 1979 },
  { name: 'Port of Felixstowe', code: 'GBFXT', country: 'UK', type: 'Container', opened: 1875 },
  { name: 'Port of Tanjung Pelepas', code: 'MYTPP', country: 'Malaysia', type: 'Container', opened: 2000 },
  { name: 'Port of New York', code: 'USNYC', country: 'USA', type: 'Container', opened: 1650 },
  { name: 'Port of Durban', code: 'ZADUR', country: 'South Africa', type: 'Bulk', opened: 1840 },
  { name: 'Port of Le Havre', code: 'FRLEH', country: 'France', type: 'Container', opened: 1517 },
  { name: 'Port of Algeciras', code: 'ESALG', country: 'Spain', type: 'Container', opened: 1894 },
  { name: 'Port of Gioia Tauro', code: 'ITGIT', country: 'Italy', type: 'Container', opened: 1995 },
  { name: 'Port of Vancouver', code: 'CAVAN', country: 'Canada', type: 'Bulk', opened: 1914 },
  { name: 'Port of Melbourne', code: 'AUMEL', country: 'Australia', type: 'Container', opened: 1889 },
  { name: 'Port of Manzanillo', code: 'MXZLO', country: 'Mexico', type: 'Container', opened: 1971 },
];

const PAGE_SIZE = 7;

const MarineData = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  // Filtered data based on search
  const filtered = query.trim()
    ? mockPorts.filter(port =>
        port.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : mockPorts;

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setPage(1); // Reset to first page on new search
    if (query.trim() && filtered.length === 0) {
      setError('No port found with that name.');
    }
  };

  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(totalPages, p + 1));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
      <h3 className="text-xl font-bold mb-6 text-green-700">Search Port Details</h3>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter port name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border-2 border-green-200 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-green-500 text-lg"
        />
        <button type="submit" className="bg-green-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow hover:bg-green-800">Search</button>
      </form>
      {error && <div className="text-red-500 mb-2 font-semibold">{error}</div>}
      {paginated && paginated.length > 0 && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="p-3 border">Port Name</th>
                <th className="p-3 border">Code</th>
                <th className="p-3 border">Country</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Opened</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((port, idx) => (
                <tr key={port.code} className={idx % 2 === 0 ? 'bg-white' : 'bg-green-50 hover:bg-green-100'}>
                  <td className="p-3 border font-semibold">{port.name}</td>
                  <td className="p-3 border">{port.code}</td>
                  <td className="p-3 border">{port.country}</td>
                  <td className="p-3 border">{port.type}</td>
                  <td className="p-3 border">{port.opened}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="px-4 py-2 bg-green-200 text-green-800 rounded disabled:opacity-50 font-semibold"
            >
              Previous
            </button>
            <span className="text-green-700 font-semibold">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 bg-green-200 text-green-800 rounded disabled:opacity-50 font-semibold"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {paginated && paginated.length === 0 && !error && (
        <div className="text-gray-500 text-center mt-4">No data to display.</div>
      )}
    </div>
  );
};

export default MarineData;
