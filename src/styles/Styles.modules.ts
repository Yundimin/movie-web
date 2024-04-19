import { SyncTwoTone } from "@mui/icons-material";
import styled from "styled-components";

/*

*/

// Headers.tsx file
export const NavbarWrapper = styled.div`
  .logo {
    color: #fff;
    font-size: 3rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, #eaff00, #f8d4d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "vast shadow", cursive;
  }

  .navLinks,
  .loginBtn {
    margin-left: auto;
  }

  .navLinks a.active {
    border-radius: 10px;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    color: #fff;
    margin: 20px 0;
    padding: 15px 0;
  }

  .links {
    font-family: "Acme", sans-serif;
    font-size: 20px;
    color: #ffffffe4;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.07);
      color: #eaff00;
    }
  }

  @media (max-width: 1060px) {
    .links,
    .loginBtn {
      font-size: 12px;
    }
  }
`;

// DisplayItems.tsx

export const MovieShowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-top: 5rem;
  padding: 10px;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);

  .loadingOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(3, 37, 65, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    z-index: 9999;

    > p {
      font-size: 2rem;
      margin-top: 1rem;
      letter-spacing: 2px;
    }
  }

  .movieHeading {
    width: 100%;
    > h1 {
      margin-bottom: 1.5rem;
      font-family: sans-serif;
      margin-left: 2rem;
    }
  }

  .movieCard {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .movie {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all 0.5s ease-in-out;
      margin-bottom: 3rem;

      .movieImage {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        > img {
          border-radius: 10px;
          border-bottom-right-radius: 25px;
          box-shadow: 1px 1px 10px 1px #000;
          padding: 5px;
          height: 200px;
        }

        > span {
          border: none;
          height: 35px;
          width: 35px;
          border-radius: 360px;
          background-color: #f76429;

          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          color: #fff;
          padding: 5px;
          font-size: 15px;
          position: relative;
          bottom: 20px;
        }
      }

      &:hover {
        transform: scale(1.04);
      }
    }

    .movieInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0;
      position: relative;
      bottom: 10px;

      > h4 {
        margin-bottom: 0;
        width: 230px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }

      > p {
        margin: 8px 0;
        color: grey;
        border-bottom: 1px solid grey;
      }
    }
  }

  .buttons {
    text-align: center;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    margin: 10px;

    .btnPrev,
    .btnNext {
      border: none;
      outline: none;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      background-color: #f76429;
      border-radius: 5px;

      &:hover {
        background-color: #000;
        cursor: pointer;
      }
    }
  }
`;

//*CoverPage.tsx

export const Cover = styled.div`
  text-align: center;
  width: 100%;
  margin: 6rem auto 0;
  position: relative;
  text-transform: capitalize;

  .coverText {
    position: absolute;
    color: #fff;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    text-shadow: 1px 1px 3px black;
    letter-spacing: 1px;
    line-height: 1;

    > h1 {
      font-size: 3rem;
    }

    > p {
      font-size: 20px;
    }

    > em {
      font-size: 15px;
      margin-top: 10px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-color: rgba(3, 37, 65, 0.7);
    border-bottom-left-radius: 240px;
    border-bottom-right-radius: 240px;
  }

  > img {
    height: 300px;
    width: 100%;
    border-bottom-left-radius: 240px;
    border-bottom-right-radius: 240px;
  }

  @media (max-width: 1020px) {
    .coverText {
      letter-spacing: 1px;
      line-height: 0%.2px;
      > h1 {
        font-size: 2.2rem;
      }
      > p,
      em {
        font-size: 15px;
      }
    }
    &::before,
    img {
      height: 200px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    margin: 5.2rem auto 0;
    .coverText {
      line-height: 1;
      > h1 {
        font-size: 2.2rem;
      }
      > p,
      em {
        font-size: 15px;
      }
    }

    &::before,
    img {
      height: 200px;
      border-bottom-left-radius: 0%;
      border-bottom-right-radius: 0%;
    }
  }
`;

export const SearchBar = styled.div`
  > input,
  > button {
    margin: auto;
    outline: none;
    border: none;
    border-radius: 20px;
    position: absolute;
    top: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  > input {
    height: 45px;
    width: 70%;
    box-shadow: 1px 1px 6px 2px grey;
    padding: 10px;
    font-size: 18px;
    &::placeholder {
      font-size: 16px;
    }
  }

  > button {
    padding: 14px 25px;
    left: 81%;
    font-size: 15px;
    background: linear-gradient(
      90deg,
      rgba(15, 255, 184, 1) 33%,
      rgba(7, 110, 112, 1) 100%
    );
    font-weight: bolder;
    cursor: pointer;
  }
`;
