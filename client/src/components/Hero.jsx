import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-14 bg-light text-center px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Luxury Cars on Rent
      </h1>

      <form className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 w-full max-w-screen-md bg-white shadow-lg p-6 rounded-xl md:rounded-full">
        {/* Pickup Location */}
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <label htmlFor="pickup-location" className="text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <select
            id="pickup-location"
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a City</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            {pickupLocation ? pickupLocation : 'Please select location'}
          </p>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <label htmlFor="pickup-date" className="text-sm font-medium text-gray-700">
            Pick-up Date
          </label>
          <input
            type="date"
            id="pickup-date"
            min={new Date().toISOString().split('T')[0]}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <label htmlFor="return-date" className="text-sm font-medium text-gray-700">
            Return Date
          </label>
          <input
            type="date"
            id="return-date"
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Search Button */}
        <button
  type="submit"
  className="cursor-pointer px-8 py-2 bg-blue-600 hover:bg-blue-500 text-white transition-all rounded-full flex items-center justify-center gap-2"
>
  <img src={assets.search_icon} alt="Search" className="w-5 h-5 brightness-200" />
  Search
</button>

      </form>

      {/* Main Car Image */}
      <img src={assets.main_car} alt="Luxury Car" className="max-h-72 object-contain" />
    </div>
  );
};

export default Hero;
