import React from "react";
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import coverPicture from "../assets/marvelImage.png";
import { apiKey, now_playing, trendingShows } from "../modules/ApiLinks";

const NowPlaying = () => {
  return (
    <>
      <CoverPage
        title={"Now Playing / Streaming"}
        description={"Movies Currently Playing in cinemas or Streaming Online"}
        catchyPhrase={"Watch it Now"}
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />
      <DisplayItems
        apiEndpoint={`${now_playing}?api_key=${apiKey}`}
        numberOfMovies={12}
        itemHeading={"Now Playing"}
        showButtons={true}
        tvShowOn={false}
        moviesOn={true}
      />

      <DisplayItems
        apiEndpoint={`${trendingShows}?api_key=${apiKey}`}
        numberOfMovies={12}
        itemHeading={"Now Streaming"}
        showButtons={false}
        tvShowOn={true}
        moviesOn={false}
      />
    </>
  );
};

export default NowPlaying;
