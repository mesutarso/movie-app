import { useState, useEffect } from "react";
import { endpoints } from "../config/api/api";

function useGenre(arr) {
  let [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(endpoints.genre_url);
      const response = await request.json();
      const data = response.genres;
      setGenre([...data]);
    };
    fetchData();
  }, [endpoints.genre_url]);

  const genreFiltered = genre.filter((item) => {
    if (Array.isArray(arr)) {
      return arr.includes(item.id);
    }
  });

  return genreFiltered;
}

export { useGenre };
