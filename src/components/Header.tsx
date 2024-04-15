import { AppBar, Toolbar, Typography, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Header.modules";

const menuItems = [
  { name: "Home" },
  { name: "Now Playing" },
  { name: "Popular" },
  { name: "TV Shows" },
];

const Header = () => {
  return (
    <NavbarWrapper>
      <AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
        <Toolbar>
          <Typography className="logo">Cinema</Typography>
          <div className="navLinks">
            {menuItems.map((nav, index) => (
              <Tab className="links" label={nav.name} key={index}></Tab>
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
