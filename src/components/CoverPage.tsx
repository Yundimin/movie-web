import React from "react";
import { Cover, SearchBar } from "../styles/Styles.modules";

interface CoverProps {
  title: string;
  description: string;
  catchyPhrase: string;
  headerImage: string;
  showSearch: boolean;
  showHeaderImage: boolean;
}

const CoverPage: React.FC<CoverProps> = ({
  title,
  description,
  catchyPhrase,
  headerImage,
  showSearch,
  showHeaderImage,
}) => {
  return (
    <Cover>
      <div className="coverText">
        <h1>{title}</h1>
        <p>{description}</p>
        <em>{catchyPhrase}</em>
      </div>

      {showHeaderImage && <img src={headerImage} alt="img" />}
      {showSearch && (
        <SearchBar>
          <input type="search" placeholder="Search 100000 of Movies...." />
          <button>Search</button>
        </SearchBar>
      )}
    </Cover>
  );
};

export default CoverPage;
