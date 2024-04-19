import { AppBar, Toolbar, Typography, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Styles.modules";
import { NavLink } from "react-router-dom";

export const menuItems = [
  { name: "Home", link: "/" },
  { name: "Now Playing", link: "now_playing" },
  { name: "Popular", link: "popular" },
  { name: "TV Shows", link: "tv_shows" },
];

const Header = () => {
  return (
    <NavbarWrapper>
      <AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
        <Toolbar>
          <Typography className="logo">Cinema</Typography>
          <div className="navLinks">
            {menuItems.map((nav, index) => (
              <NavLink to={nav.link} key={index}>
                <Tab className="links" label={nav.name} />
              </NavLink>
            ))}
          </div>
          <Button className="loginBtn" variant="contained" color="info">
            LogIn
          </Button>
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;
