import React from 'react';

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Sydney" },
    { id: 3, title: "Mumbai" },
    { id: 4, title: "Indore" },
    { id: 5, title: "Paris" },
  ];

  return (
    <div className='flex flex-wrap lg:items-center lg:justify-center justify-start  my-6'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='text-white text-lg p-3 font-medium mb-2' // Adds margin at the bottom for wrapped items
          onClick={() => setQuery({ q: city.title })} // Set query on button click
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
