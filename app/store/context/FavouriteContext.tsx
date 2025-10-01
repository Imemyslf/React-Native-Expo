import { createContext, ReactNode, useState } from "react";

interface FavouriteContextType {
  ids: string[];
  addFavourites: (id: string) => void;
  removeFavourites: (id: string) => void;
}

interface FavouriteContextProviderProps {
  children: ReactNode;
}

export const FavouriteContext = createContext<FavouriteContextType>({
  ids: [],
  addFavourites: (id: string) => {},
  removeFavourites: (id: string) => {},
});

function FavouriteContextProvider({ children }: FavouriteContextProviderProps) {
  const [favouriteMealId, setFavIds] = useState<string[]>([]);

  function addFavourites(id: string) {
    setFavIds((currentFavs) => [...currentFavs, id]);
  }

  function removeFavourites(id: string) {
    setFavIds((currentFavs) => currentFavs.filter((mealId) => mealId !== id));
  }

  const value: FavouriteContextType = {
    ids: favouriteMealId,
    addFavourites,
    removeFavourites,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
