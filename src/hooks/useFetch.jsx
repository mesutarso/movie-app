import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(endpoint);
      const response = await request.json();
      setItem([...response]);
      setIsLoading(false);
    };
    fetchData();
  }, [endpoint]);

  return [item, setItem, isLoading, setIsLoading];
};
