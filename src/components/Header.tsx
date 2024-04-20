import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavbarWrapper } from "../styles/Styles.modules";
import { NavLink } from "react-router-dom";
import DrawerContainer from "./DrawerContainer";

export const menuItems = [
  { name: "Home", link: "/" },
  { name: "Now Playing", link: "now_playing" },
  { name: "Popular", link: "popular" },
  { name: "TV Shows", link: "tv_shows" },
];

const Header = () => {
  const themes = useTheme();
  const isMatching = useMediaQuery(themes.breakpoints.down("md"));
  return (
    <NavbarWrapper>
      <AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
        <Toolbar>
          <Typography className="logo">Cinema</Typography>
          {isMatching ? (
            <DrawerContainer />
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;
