import React from "react";
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import {
  apiKey,
  trending,
  popularShows,
  top_rated_movies,
  top_rated_shows,
  popular,
  upcoming,
} from "../modules/ApiLinks";
import coverPicture from "../assets/marvelImage.png";
const defaultProps = {
  numberOfMovies: 12,
  showButtons: true,
};

const Home = () => {
  const [headerImage, setHeaderImage] = React.useState("");

  //fetch the header image for homepage from the server
  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        if (randomMovie && randomMovie.backdrop_path) {
          const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
          setHeaderImage(imageUrl);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      <CoverPage
        title={"Welcome To Cinematica"}
        description={"millions of movies / tv shows at one place"}
        catchyPhrase={"Don't miss out the entertainment"}
        headerImage={headerImage}
        showSearch={true}
        showHeaderImage={true}
      />

      <DisplayItems
        apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`}
        itemHeading={"Top Rated Shows"}
        tvShowOn={true}
        moviesOn={false}
        {...defaultProps}
      />

      <DisplayItems
        apiEndpoint={`${popular}?api_key=${apiKey}`}
        itemHeading={"Popular Movies"}
        tvShowOn={false}
        moviesOn={true}
        {...defaultProps}
      />

      <DisplayItems
        apiEndpoint={`${upcoming}?api_key=${apiKey}`}
        itemHeading={"Upcoming"}
        tvShowOn={true}
        moviesOn={false}
        {...defaultProps}
      />

      <DisplayItems
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        itemHeading={"Popular shows"}
        tvShowOn={true}
        moviesOn={false}
        {...defaultProps}
      />
    </div>
  );
};

export default Home;
