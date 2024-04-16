import React from "react";
import Header from "./components/Header";
import DisplayItems from "./components/DisplayItems";
import { apiKey, trending } from "./modules/ApiLinks";

function App() {
  return (
    <>
      <Header />
      <DisplayItems
        apiEndpoint={`${trending}?api_key=${apiKey}`}
        itemHeading="Trending Movies"
        tvShowOn={false}
        showButtons={true}
        moviesOn={true}
        numberOfMovies={10}
      />
    </>
  );
}

export default App;
