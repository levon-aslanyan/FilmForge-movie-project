import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
