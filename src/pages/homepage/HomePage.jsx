import React, { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import {
  TMDB_IMAGE_URL,
  TMDB_MOVIE_LIST_API_,
  TMDB_SEARCH_API,
} from "../../constants/tmdb-url";
import axios from "axios";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../../context/DarkModeContext";
import useDebounce from "../../hooks/useDebounce";
import ShimmerUI from "../../components/shimmerUi/ShimmerUI";

function HomePage() {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();
  const isDarkMode = useContext(DarkMode);

  //const [movieList, setMovieList] = useState([{}]);
  const [searchText, setSearchText] = useState("");
  const movieList = useDebounce(searchText, 500);
  console.log("🚀 ~ file: HomePage.jsx:24 ~ HomePage ~ movieList:", movieList);

  // useEffect(() => {
  //   getMovieList();
  // }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (searchText != "") {
  //       getSearchData(searchText);
  //     } else {
  //       getMovieList();
  //     }
  //   }, 500);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [searchText]);

  // const getMovieList = async () => {
  //   const data = await axios(TMDB_MOVIE_LIST_API_);
  //   setMovieList(data?.data?.results);
  // };

  // const getSearchData = async (text) => {
  //   const data = await axios(TMDB_SEARCH_API, { params: { query: text } });
  //   setMovieList(data?.data?.results);
  // };

  if (!Auth?.isAuth) {
    navigate("/login");
  }
  
    return (
      <div className="home-main">
        {movieList.length == 1 ? (
          <ShimmerUI />
        ) : (
          <>
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
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="card-container">
                {movieList &&
                  movieList.map((item) => {
                    return (
                      <div key={item.id} className="movie-card">
                        <Link to={`/teaser/${item.id}`}><img src={TMDB_IMAGE_URL + item.poster_path} alt="" /></Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default HomePage;
