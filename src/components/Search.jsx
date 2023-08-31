import React from 'react';
import './Search.css';

import { useState } from 'react';

export default function Search() {

  // State
  const [apiData, setApiData] = useState({});
  const [place, setPlace] = useState('');

  // API KEY AND URL
  const apiKey = 'ec112e164c3b7dd3ec382aca02d7083a';

  // Side effect
  const getDataApi = (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  console.log(`api`, apiData);


  return (
    <div>
      <form className="search-form" onSubmit={getDataApi}>
        <input
          className="search-inside"
          type="text"
          placeholder="Type city name"
          onChange={(e) => setPlace(e.target.value)}
          value={place} />
        <button className="search-button " type='submit'>
          button
          {/* <img src={require("./../imgs/search_icon.png")} alt="" /> */}
        </button>
      </form>
    </div>
  );
}