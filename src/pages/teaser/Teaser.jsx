import { useParams } from "react-router-dom";
import Layout1 from "../../components/layout/Layout1";
import "../teaser/Teaser.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Teaser = () => {
  const [videoDetails, setVideoDetails] = useState({ videoId: "", title: "" });
  console.log("🚀 ~ file: Teaser.jsx:9 ~ Teaser ~ videoDetails:", videoDetails)
  const { id } = useParams();

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d3449ff6ec0c027623bf6b6f5fff78b3`
    );

    const teaser = data?.data?.results.filter(
      (item) => item.type == "Trailer" || item.type == "Teaser"
    );
    console.log("🚀 ~ file: Teaser.jsx:24 ~ getVideoDetails ~ teaser:", teaser)
    setVideoDetails({videoId:teaser[0].key,name:teaser[0].name});
  };
  return (
    <div className="container">
      <Layout1>
        <div className="main-container">
          <h3>{videoDetails.name}</h3>
          <div className="yt-iframe">
            <iframe
              id="player"
              type="text/html"
              width="740"
              height="490"
              src={`http://www.youtube.com/embed/${videoDetails.videoId}?autoplay=1&enablejsapi=1&origin=http://example.com`}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </Layout1>
    </div>
  );
};

export default Teaser;
