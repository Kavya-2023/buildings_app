import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';

import PropertyCard from './PropertyCard';
const buildingsList=[
    {
        id:"one",
        purpose:"For Rent",
        location:"8558 Pecan St",
        address:"RCE Theaters-907 S Beck Dr,Henderson ,NC 27536",
        feature1:"3 Room",
        feature2:"4 Bed",
        feature3:"1 Bath",
        feature4:"732 sft",
        cost:"7,255",
    },
    {
        id:"two",
        purpose:"For Rent",
        location:"8558 Parker Rd",
        address:"Costco Wholesale-1021 Oak Forest Ln,Myrtle beach,SC",
        feature1:"3 Room",
        feature2:"4 Bed",
        feature3:"1 Bath",
        feature4:"732 sft",
        cost:"7,255",
    },
    {
        id:"three",
        purpose:"For Sale",
        location:"3890 Popular Dr.",
        address:"Regal North Hills-4150 Main at North Hills St.Releigh",
        feature1:"3 Room",
        feature2:"4 Bed",
        feature3:"1 Bath",
        feature4:"732 sft",
        cost:"5,256",
    },
    {
        id:"four",
        purpose:"For Rent",
        location:"8558 Green Rd.",
        address:"Spring Lane Cinemas-1351 Plazza Bivd,Sanford ,NC 27330",
        feature1:"3 Room",
        feature2:"4 Bed",
        feature3:"1 Bath",
        feature4:"732 sft",
        cost:"7,255",
    },
    {
        id:"five",
        purpose:"For Sale",
        location:"8558 Green Rd.",
        address:"RCE Theaters-907 S Beck Dr,Henderson ,NC 27536",
        feature1:"3 Room",
        feature2:"4 Bed",
        feature3:"1 Bath",
        feature4:"732 sft",
        cost:"7,255",
    },
    {
        id:"six",
        purpose:"For Rent",
        location:"8558 Pecan St",
        address:"Dollar General-5416 Rock Quarry Rd,Raleigh,NC 27610",
        feature1:"3 Room",
        feature2:"4 Bed",
        feature3:"1 Bath",
        feature4:"732 sft",
        cost:"7,255",
    }
]
function CityTabs() {
  const [activeCity, setActiveCity] = useState('newyork');
  const [showMore, setShowMore] = useState(false);
  const handleTabClick = (city) => {
    setActiveCity(city);
  };

  return (
    <div className='big-container'>
        <div className="header-container">
        <h2>Featured Properties</h2>
      <nav className='nav-bar'>
      <ul >
        <li
          className={activeCity === 'newyork' ? 'active' : ''}
          onClick={() => handleTabClick('newyork')}
        >
          
              New York
          
        </li>
        <li
          className={activeCity === 'mumbai' ? 'active' : ''}
          onClick={() => handleTabClick('mumbai')}
        >
              Mumbai
        </li>
        <li
          className={activeCity === 'paris' ? 'active' : ''}
          onClick={() => handleTabClick('paris')}
        >
              Paris
        </li>
        <li
          className={activeCity === 'london' ? 'active' : ''}
          onClick={() => handleTabClick('london')}
        >
              London
          
        </li>
        </ul>
        <button className='btn btn-outline-primary'>view all<FontAwesomeIcon icon={faArrowRight} /></button>
      </nav>
    </div>
    <div className='cities-container'>
        {buildingsList.slice(0, showMore ? buildingsList.length : 3).map((property) => (
          <PropertyCard  buildings={property} />
        ))}
    </div>
      {buildingsList.length > 3 && (
        <button onClick={() => setShowMore(!showMore)} className='btn btn-primary bottom-btn'>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

export default CityTabs;