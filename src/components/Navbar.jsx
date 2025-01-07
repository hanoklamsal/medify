import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import styles from "./Navbar.module.css";
import medify_logo from "./../assets/images/medify_logo.png";
import "./../App.css";
import { Container } from "@mui/material";

const pages = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ boxShadow: "none" }}>
      <Container className={styles.navbarContainer} maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding:'0 64px' }}>
          
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={medify_logo} alt="Medify Logo" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                ml: 2,
                fontFamily: "sans-serif",
                fontWeight: 700,
                color: "var(--primary-color)",
                fontSize: "18px",
                textDecoration: "none",
                lineHeight: '27px',
              }}
            >
              Medify
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Typography
                key={page}
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  color: "var(--primary-text-color)",
                  textDecoration: "none",
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--primary-color)",
              textTransform: "none",
            }}
          >
            My Bookings
          </Button>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
