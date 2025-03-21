import { AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer,
  List,
  ListItem,
  ListItemText, 
  useMediaQuery 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detects if the screen is small
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };
  
  return (
    <>
      <AppBar sx={{ backgroundColor: "#020145c7 !important" }}>
        <Toolbar>
          

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cv - ats
          </Typography>

          {/* Menu full Window*/}
          {!isMobile && (
            <>
              <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "1rem" }}>Inicio</Link>
              <Link to="/servicios" style={{ color: "white", textDecoration: "none", marginRight: "1rem" }}>Servicios</Link>
              <Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</Link>
            </>
          )}

          {/* hamburger menu button */}
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          
        </Toolbar>
      </AppBar>

      {/* Drawer (Side menu on mobile phones) */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button component={Link} to="/servicios" onClick={toggleDrawer(false)}>
            <ListItemText primary="Servicios" />
          </ListItem>
          <ListItem button component={Link} to="/contacto" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
