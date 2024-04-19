import React from "react";
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import coverPicture from "../assets/marvelImage.png";
import { apiKey, popular, popularShows } from "../modules/ApiLinks";

const Popular = () => {
  return (
    <>
      <CoverPage
        title={"Popular Movies"}
        description={"Watch your favorite movies of all time"}
        catchyPhrase={"the movies which are popular this week"}
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />
      <DisplayItems
        apiEndpoint={`${popular}?api_key=${apiKey}`}
        numberOfMovies={12}
        itemHeading={"Popular Movies"}
        showButtons={true}
        tvShowOn={false}
        moviesOn={true}
      />

      <DisplayItems
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        numberOfMovies={12}
        itemHeading={"Popular Shows"}
        showButtons={false}
        tvShowOn={true}
        moviesOn={false}
      />
    </>
  );
};

export default Popular;
