import { createContext } from "react";
import { useMovies } from "../hooks/useMovie";
import { endpoints } from "../config/api/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovie, isLoading, setIsLoading] = useMovies(
    endpoints.movies_url
  );

  return (
    <MovieContext.Provider value={[movies, setMovie, isLoading, setIsLoading]}>
      {children}
    </MovieContext.Provider>
  );
};
