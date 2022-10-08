import React, { useEffect } from "react";
import { API_KEY } from "./keys.js";

const CONTEXT_KEY = "b5caa024207b7457d";

const useGoogleSearch = (term) => {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
