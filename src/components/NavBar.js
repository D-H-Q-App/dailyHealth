import React, {useState} from 'react'
import createClass from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SpaIcon from "@mui/icons-material/Spa";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl)


  const redirectToAboutUs = () => {
    navigate("/aboutUs")
  }

  const redirectToAyurveda = () => {
    navigate("/aboutayurveda")
  }

  const redirectToMetabolicType = () => {
    navigate("/metabolictype")
  }


  const redirectToHome = () => {
    navigate("/")
  }



  // const redirectToMetabolicType = () => {
  //   navigate("/metabolicType")
  // }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
    <AppBar position="static" color="secondary">
      <Toolbar>
      < SpaIcon onClick={
                  redirectToHome}/>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon aria-controls="basix-menu" aria-haspopup="true"
          aria-expanded={openMenu ? 'true': undefined}
          onClick={handleClick}/>

            <Menu
              color="secondary"
              id="basic-menu"
              open={openMenu}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem color="secondary" onClick={() => {
                  redirectToAboutUs();
                  handleClose();
                }}>About Us</MenuItem>
              <MenuItem color="secondary" onClick={() => {
                  redirectToAyurveda();
                  handleClose();
                }}>About Ayurveda</MenuItem>
              <MenuItem color="secondary" onClick={() => {
                  redirectToMetabolicType();
                  handleClose();
                }}>Metabolic Types</MenuItem>
              <MenuItem color="secondary" onClick={() => {
                  redirectToHome();
                  handleClose();
                }}>Back to Home</MenuItem>
            </Menu>
        </IconButton>
        <Typography onClick={redirectToHome
                } variant="h6" align='center' component="div" sx={{ flexGrow: 6}}>
          D.H.Q.
        </Typography>

      </Toolbar>
    </AppBar>
  </Box>
);
}
export default Navbar;
