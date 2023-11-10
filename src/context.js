import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (cocktail) => {
    setFavorites((prevFavorites) => [...prevFavorites, cocktail]);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter(
        (favorite) => favorite.idDrink !== id
      );
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
