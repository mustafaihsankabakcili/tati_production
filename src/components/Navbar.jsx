import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/tati_production.webp";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const pages = [
  "Kurumsal",
  "Hizmetler",
  "Projeler",
  "Referanslar",
  "Videolar",
  "Tanitim Filmi Fiyatlari",
  "Iletisim",
];
const paths = [
  "kurumsal",
  "hizmetler",
  "projeler",
  "referanslar",
  "videolar",
  "tanitim-filmi-fiyatlari",
  "iletisim",
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (i) => {
    setAnchorElNav(null);
    if (!isNaN(i)) {
      navigate(`/${paths[i]}`);
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <Container maxWidth="xl" style={{margin: "auto", minWidth: "100%" }}>
        <Toolbar disableGutters>

          <Box style={{display:'flex', justifyContent:'center', width:'175px'}}>
          <NavLink to="/">
            <img src={logo} alt="" style={{ width: "75px", height:'75px'}} />
          </NavLink>
          </Box>
          

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "none",
                lg: "flex",
                justifyContent: "center",
                gap: "5px",
                marginRight:'175px'
              },
            }}
          >
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(i)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              width:'175px',
              position:'absolute',
              right:'0'
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexGrow: 0,
                gap: "5px",
              }}
            >
              <NavLink to="/">
                <AiFillFacebook className="icons" />
              </NavLink>
              <NavLink to="/">
                <AiFillTwitterCircle />
              </NavLink>
              <NavLink to="/">
                <AiFillYoutube />
              </NavLink>
              <NavLink to="/">
                <AiFillInstagram />
              </NavLink>
              <NavLink to="/">
                <AiFillLinkedin />
              </NavLink>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "flex", md: "flex", lg: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "block", lg: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(i)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
