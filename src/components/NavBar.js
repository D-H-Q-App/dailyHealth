import React, {useState} from 'react'
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
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl)


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon aria-controls="basix-menu" aria-aria-haspopup="true"
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
              <MenuItem color="secondary" onClick={handleClose}>About Us</MenuItem>
              <MenuItem color="secondary" onClick={handleClose}>About Ayurveda</MenuItem>
              <MenuItem color="secondary" onClick={handleClose}>Metabolic Types</MenuItem>
            </Menu>
        </IconButton>
        < SpaIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          D.H.Q.
        </Typography>

      </Toolbar>
    </AppBar>
  </Box>
);
}
export default Navbar;
