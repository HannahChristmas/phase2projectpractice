// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import NewRestaurantForm from "./NewRestaurantForm";
import SearchBar from "./SearchBar";


function RestaurantPage() {
   const [allRestaurants, setAllRestaurants] = useState([])
   const [filterNeighborhood, setFilterNeighborhood] = useState("Neighborhood")
   const [filterCuisine, setFilterCuisine] = useState("Cuisine")

  useEffect(() => {
    fetch('http://localhost:3004/restaurants')
      .then((response) => response.json())
      .then((data) => setAllRestaurants(data));
  }, [])
  
  function handleNeighborhoodFilter(e){
    setFilterNeighborhood(e.target.value)
  }

  function handleCuisineFilter(e){
    setFilterCuisine(e.target.value)
  }

  return (
    <main>
       <h1>All of Our Restaurants</h1>
      <SearchBar handleNeighborhoodFilter={handleNeighborhoodFilter} handleCuisineFilter={handleCuisineFilter}/>  
      <RestaurantList filterNeighborhood={filterNeighborhood} filterCuisine={filterCuisine} allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants}/>
      
      {/* <Search />
      <Filter /> */}
    </main>
  );
}

export default RestaurantPage;
