import React from "react";
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import coverPicture from "../assets/marvelImage.png";
import {
  apiKey,
  popularShows,
  top_rated_shows,
  trendingShows,
} from "../modules/ApiLinks";

const TvShows = () => {
  return (
    <>
      <CoverPage
        title={"Tour Favorite Shows"}
        description={"Toousands of TV Shows"}
        catchyPhrase={"Watch it Now"}
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />
      <DisplayItems
        apiEndpoint={`${trendingShows}?api_key=${apiKey}`}
        numberOfMovies={12}
        itemHeading={"Trending Shows"}
        showButtons={true}
        tvShowOn={true}
        moviesOn={false}
      />
      <DisplayItems
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        numberOfMovies={12}
        itemHeading={"Popular Shows"}
        showButtons={false}
        tvShowOn={true}
        moviesOn={false}
      />
      <DisplayItems
        apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`}
        numberOfMovies={12}
        itemHeading={"Top Rated Shows"}
        showButtons={false}
        tvShowOn={true}
        moviesOn={false}
      />
    </>
  );
};

export default TvShows;
