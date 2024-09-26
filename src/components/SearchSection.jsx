import React from 'react'

const SearchSection = ({ getWeatherDetails, searchInputRef }) => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Search location
   const handleCitySearch = (e) => {
     e.preventDefault();
     const searchInput = e.target.querySelector(".search-input");
     const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}
     &days=2`;
     getWeatherDetails(API_URL);
   }


   // Current location
   const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL);
      },
      () => {
        alert("Location acces denied. Please enable permissions to use this feature");
      }
    )
   }

  return (
    <div className="search-section">
    <form action="#" className="search-form" onSubmit={handleCitySearch}>
    <span className="material-symbols-rounded">search</span>
      <input type="search" placeholder="Your Country" ref={searchInputRef} className="search-input" required/>
    </form>
    <button className="location-button" onClick={handleLocationSearch}>
    <span className="material-symbols-rounded">my_location</span>
    </button>
    </div>
  )
}

export default SearchSection