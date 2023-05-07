import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import {
  TMDB_IMAGE_URL,
  TMDB_MOVIE_LIST_API_,
  TMDB_SEARCH_API,
} from "../../constants/tmdb-url";
import axios from "axios";
import Header from "../Header/Header";
import { AuthContext } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import { DarkMode } from "../../context/DarkModeContext";

function HomePage() {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();
  const isDarkMode = useContext(DarkMode);

  const [movieList, setMovieList] = useState([{}]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getMovieList();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText != "") {
        getSearchData(searchText);
      } else {
        getMovieList();
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  const getMovieList = async () => {
    const data = await axios(TMDB_MOVIE_LIST_API_);
    setMovieList(data?.data?.results);
  };

  const getSearchData = async (text) => {
    const data = await axios(TMDB_SEARCH_API, { params: { query: text } });
    setMovieList(data?.data?.results);
  };

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text == "") {
      getMovieList();
    }
  };

  if (!Auth?.isAuth) {
    navigate("/login");
  }
  if (movieList == []) {
    return (
      <div>
        <H1>Loading</H1>
      </div>
    );
  }
  return (
    <div className="home-main">
      <div
        className={`home-overlay ${
          isDarkMode?.colorMode == "dark"
            ? "home-overlay"
            : "home-overlay light-mode"
        }`}
      ></div>
      <Header />
      <div className="home-container">
        <div className="search-containter">
          <input
            type="text"
            className="search-box"
            placeholder="search"
            value={searchText}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="card-container">
          {movieList &&
            movieList.map((item) => {
              return (
                <div key={item.id} className="movie-card">
                  <img src={TMDB_IMAGE_URL + item.poster_path} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
