import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import { Stack } from "@mui/system";

function Navbar() {
  return (
    <AppBar
      color="secondary"
      position="static"
    >
      <Toolbar >
        <IconButton size="small" color="primary edge=" start aria-label="label">
          <SpaIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Daily Health Quiz
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="primary">Metobolic Type</Button>
          <Button color="primary">About Us</Button>
          <Button color="primary">Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
