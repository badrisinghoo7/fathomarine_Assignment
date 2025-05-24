import React, { useState } from 'react';

// Extended mock port data with optional image URLs
const mockShips = [
  {
    name: 'Ever Given',
    code: 'EG123',
    country: 'Panama',
    type: 'Container Ship',
    opened: 2018,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmadovCAGztSaP37opgQq0_qF2ksjKUrDGA&s'
  },
  {
    name: 'Symphony of the Seas',
    code: 'SOS456',
    country: 'Bahamas',
    type: 'Cruise Ship',
    opened: 2018,
    image: 'https://media.istockphoto.com/id/104241367/photo/cruise-ship.jpg?s=612x612&w=0&k=20&c=so7ce3cN0vhkKqIL38muc7rPqkp6WyNXWiWzuXH-mD4='
  },
  {
    name: 'TI Europe',
    code: 'TIE789',
    country: 'Belgium',
    type: 'Oil Tanker',
    opened: 2002,
    image: 'https://media.istockphoto.com/id/1416040835/photo/aerial-view-of-a-large-loaded-container-cargo-ship-in-motion.jpg?s=612x612&w=0&k=20&c=ZP5DjN5ctgeefdvOBTHhx0h39gSsr2POQ4iw5ZuZRIU='
  },
  {
    name: 'Queen Mary 2',
    code: 'QM2002',
    country: 'UK',
    type: 'Ocean Liner',
    opened: 2003,
    image: 'https://cdn.pixabay.com/photo/2024/05/28/12/28/ship-8793759_1280.jpg'
  },
  {
    name: 'MSC Oscar',
    code: 'MSCO123',
    country: 'Liberia',
    type: 'Container Ship',
    opened: 2015,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzRLsOuYHI3DX1vNAGMc4b4DW1u3xOIgG_57qvdBuYEJaQZVr7DjyjLyvHlVys2FWDDw&usqp=CAU'
  },
  {
    name: 'Rainbow Warrior',
    code: 'RW1989',
    country: 'Netherlands',
    type: 'Sailing Ship',
    opened: 1989,
    image: 'https://www.shutterstock.com/image-photo/industrial-heavy-lift-vessel-ship-260nw-1142412074.jpg'
  },
  {
    name: 'Costa Smeralda',
    code: 'CS2019',
    country: 'Italy',
    type: 'Cruise Ship',
    opened: 2019,
    image: 'https://www.shutterstock.com/image-photo/mooring-man-charge-safety-sailing-260nw-1623882277.jpg'
  },
  {
    name: 'USS Missouri',
    code: 'USM1944',
    country: 'USA',
    type: 'Battleship',
    opened: 1944,
    image: 'https://www.clarksons.com/media/4wxbune4/gettyimages-1387797809-lr.jpg?width=1920&height=960&format=webp&quality=80&v=1dba9f96bb47120'
  },
  {
    name: 'Aurora Australis',
    code: 'AA1989',
    country: 'Australia',
    type: 'Icebreaker',
    opened: 1989,
    image: 'https://media.istockphoto.com/id/1003638002/photo/msc-preziosa-cruiser-ship-passing-by-in-the-stockholm-swedish-archipelago.jpg?s=612x612&w=0&k=20&c=3tBUA2GQu5qQhqgV2KQAEjvDCfejpaei5EoB9wQ5sFk='
  },
  {
    name: 'MV Blue Marlin',
    code: 'BM2000',
    country: 'Netherlands',
    type: 'Heavy Lift Ship',
    opened: 2000,
    image: 'https://www.rightboat.com/blogimages/misc/2599/Titanic.jpg'
  },
];

const PAGE_SIZE = 7;

const MarineData = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  // Filtered data based on search
  const filtered = query.trim()
    ? mockShips.filter(ship =>
        ship.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : mockShips;

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setPage(1); // Reset to first page on new search
    if (query.trim() && filtered.length === 0) {
      setError('No ship found with that name.');
    }
  };

  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(totalPages, p + 1));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
      <h3 className="text-xl font-bold mb-6 text-green-700">Search Ship Details</h3>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter ship name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border-2 border-green-200 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-green-500 text-lg"
        />
        <button type="submit" className="bg-green-700 text-white px-8 py-2 rounded-lg font-bold text-lg shadow hover:bg-green-800">Search</button>
      </form>
      {error && <div className="text-red-500 mb-2 font-semibold">{error}</div>}
      {paginated && paginated.length > 0 && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {paginated.map((ship) => (
              <div key={ship.code} className="bg-green-50 rounded-xl shadow p-0 hover:shadow-lg transition flex flex-col">
                <img
                  src={ship.image}
                  alt={ship.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                  loading="lazy"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-green-800 mb-2">{ship.name}</h4>
                  <div className="text-sm text-green-900 mb-1"><span className="font-semibold">IMO Code:</span> {ship.code}</div>
                  <div className="text-sm text-green-900 mb-1"><span className="font-semibold">Flag:</span> {ship.country}</div>
                  <div className="text-sm text-green-900 mb-1"><span className="font-semibold">Type:</span> {ship.type}</div>
                  <div className="text-sm text-green-900"><span className="font-semibold">Year Built:</span> {ship.opened}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-8">
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
