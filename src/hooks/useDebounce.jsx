import { useEffect, useState } from "react";
import { TMDB_MOVIE_LIST_API_, TMDB_SEARCH_API } from "../constants/tmdb-url";
import axios from "axios";

const useDebounce = (searchTxt, delay) => {
  const [debounceList, setDebounceList] = useState([{}]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTxt != "") {
        getSearchData(searchTxt);
      } else {
        getMovieList();
      }
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchTxt]);

  const getSearchData = async (text) => {
    try {
      const data = await axios(TMDB_SEARCH_API, { params: { query: text } });
      setDebounceList(data?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieList = async () => {
    try {
      const data = await axios(TMDB_MOVIE_LIST_API_);
      setDebounceList(data?.data?.results);
    } catch (error) {
      console.error(error);
    }
  };

  return debounceList;
};

export default useDebounce;
