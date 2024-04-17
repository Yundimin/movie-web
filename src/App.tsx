import React from "react";
import Header from "./components/Header";
import DisplayItems from "./components/DisplayItems";
import {
  apiKey,
  trending,
  popularShows,
  top_rated_movies,
  top_rated_shows,
  popular,
} from "./modules/ApiLinks";
import CoverPage from "./components/CoverPage";
import coverPicture from "./assets/marvelImage.png";

const itemProps = {
  numberOfMovies: 10,
};

function App() {
  return (
    <>
      <Header />
      <CoverPage
        title={"Hello"}
        description={"lorem ipsjei"}
        catchyPhrase={"I can do anything"}
        headerImage={coverPicture}
        showSearch={false}
        showHeaderImage={true}
      />
      <DisplayItems
        {...itemProps}
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        itemHeading={"Popular Shows"}
        showButtons={true}
        tvShowOn={true}
        moviesOn={false}
      />

      <DisplayItems
        {...itemProps}
        apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`}
        itemHeading={"Top Rated Shows"}
        showButtons={false}
        tvShowOn={true}
        moviesOn={false}
      />

      <DisplayItems
        {...itemProps}
        apiEndpoint={`${popular}?api_key=${apiKey}`}
        itemHeading={"Popular Movies"}
        showButtons={true}
        tvShowOn={false}
        moviesOn={true}
      />
    </>
  );
}

export default App;
