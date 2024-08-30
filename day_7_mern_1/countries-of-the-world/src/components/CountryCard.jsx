// src/components/CountryCard.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const CountryCard = ({ country }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const isFavorite = favorites.includes(country);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(country);
    } else {
      addFavorite(country);
    }
  };

  return (
    <div>
      <img
        src={`https://flagsapi.com/${country.cca2}/shiny/64.png`}
        alt={`${country.name.common} flag`}
      />
      <h3>{country.name.common}</h3>
      <p>
        Currency: {country.currencies[Object.keys(country.currencies)[0]].name}
      </p>
      <p>Capital: {country.capital}</p>
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CountryCard;
