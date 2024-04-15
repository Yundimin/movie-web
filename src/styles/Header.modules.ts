import styled from "styled-components";

/*

*/

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

  .navLinks {
  }

  .links {
    font-family: "Acme", sans-serif;
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: 1060px) {
    .links,
    .loginBtn {
      font-size: 12px;
    }
  }
`;
