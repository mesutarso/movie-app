import { useState, useEffect } from "react";

export const useMovies = (endpoint) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(endpoint);
      const response = await request.json();
      const data = await response.results;

      setItem([...data]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return [item, setItem, isLoading, setIsLoading];
};
