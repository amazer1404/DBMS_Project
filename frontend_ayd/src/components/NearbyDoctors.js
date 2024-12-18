import React, { useState } from 'react';
import './NearbyDoctors.css';
import HumanBody from './HumanBody';
import SummaryApi from '../common';
import bodyParts from '../helpers/bodyParts';

const NearbyDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [pincode, setPincode] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pincode') {
      setPincode(value);
    } else if (name === 'specialty') {
      setSpecialty(value);
    }
  };

  const filterDoctors = async () => {
    try {
      const response = await fetch(SummaryApi.nearbyDoctors.url, {
        method: SummaryApi.nearbyDoctors.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const doctors = await response.json();
      setDoctors(doctors);
      console.log(doctors);
      
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  return (
    <div className="flex items-center justify-around gap-11 bg-gradient p-6">
      <div className="bg-white p-8 md:p-12 rounded-3xl w-[calc(600px)] max-w-4xl shadow-lg space-y-8">
        <h2 className="text-3xl font-semibold text-center text-charcoal">Contact Nearby Doctors</h2>
        <p className="text-center text-gray-600">Find and reach out to doctors near your location</p>

        <form id="searchForm" className="space-y-5">
          <div className="flex items-center space-x-4">
            <label htmlFor="location" className="w-1/4 text-charcoal font-semibold">Your Location:</label>
            <input
              type="text"
              id="location"
              name="pincode"
              value={pincode}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your pin code"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor='specialty' className='w-1/4 text-charcoal font-semibold'>Doctor's Specialty:</label>
            <select 
              id="specialty"
              name="specialty"
              value={specialty}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>Select a specialty</option>
              {bodyParts.map((el, index) => (
                <option value={el.bodyPart} key={el.bodyPart + index}>{el.speciality}: {el.bodyPart}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center mt-6">
            <button type="button" onClick={filterDoctors} className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary">Find Doctors</button>
          </div>
        </form>

        <div id="resultsSection" className={`space-y-4 mt-8 ${doctors.length ? '' : 'hidden'}`}>
          <h3 className="text-xl font-semibold text-charcoal">Available Doctors:</h3>

          <div id="doctorsList" className="space-y-4">
            {doctors.map((doc) => (
              <div key={doc.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-center space-x-4">
                <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold text-charcoal">{doc.name}</h4>
                  <p className="text-gray-600">{doc.specialty.charAt(0).toUpperCase() + doc.specialty.slice(1)} - {doc.distance}</p>
                  <button className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary">Contact</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HumanBody />
    </div>
  );
};

export default NearbyDoctors;
