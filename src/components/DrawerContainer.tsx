import React from "react";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "./Header";
import { NavLink } from "react-router-dom";

const DrawerContainer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const drawerBtn = () => {
    setOpenDrawer(!openDrawer);
  };

  const CustomNavLink = styled(NavLink)(({ theme }) => ({
    TextDecoration: "none",
    color: theme.palette.text.primary,
  }));

  return (
    <>
      <Drawer open={openDrawer} onClose={drawerBtn} anchor="right">
        <List>
          {menuItems.map((nav, index) => (
            <CustomNavLink to={nav.link} key={index}>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText sx={{ color: "blue" }}>{nav.name}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </CustomNavLink>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "whitesmoke" }}
        onClick={drawerBtn}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerContainer;
