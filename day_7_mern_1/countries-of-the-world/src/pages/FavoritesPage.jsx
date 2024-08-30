// src/pages/FavoritesPage.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import CountryCard from "../components/CountryCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))
      ) : (
        <p>No favorite countries yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
