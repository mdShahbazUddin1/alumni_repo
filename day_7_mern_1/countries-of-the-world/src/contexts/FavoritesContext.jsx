// src/contexts/FavoritesContext.jsx
import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (country) => {
    setFavorites([...favorites, country]);
  };

  const removeFavorite = (country) => {
    setFavorites(favorites.filter((fav) => fav !== country));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
