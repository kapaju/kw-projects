import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
 
const Navigation = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const menuOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
		setAnchorEl(null);
  }

  return (
      <div>
        <AppBar>
          <Toolbar>
            <div>
            <IconButton 
              edge="start" 
              color="inherit" 
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={menuOpen}
							onClose={handleMenuClose}
						>
              <NavLink to="/kw-projects">
                <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              </NavLink>
              <NavLink to="/binaryconverter">
                <MenuItem onClick={handleMenuClose}>Binary Converter</MenuItem> 
              </NavLink>
              <NavLink to="/anecdotes">
                <MenuItem onClick={handleMenuClose}>Anecdotes</MenuItem>
              </NavLink>  
              <NavLink to="/colors">
                <MenuItem onClick={handleMenuClose}>Colors</MenuItem>
              </NavLink>  
              <NavLink to="/unicafe">
                <MenuItem onClick={handleMenuClose}>Unicafe</MenuItem>
              </NavLink>  
              <NavLink to="/colorslider">
                <MenuItem onClick={handleMenuClose}>RGB slider</MenuItem>
              </NavLink>  
              <NavLink to="/dates">
                <MenuItem onClick={handleMenuClose}>Dates</MenuItem>
              </NavLink>
              <NavLink to="/personform">
                <MenuItem onClick={handleMenuClose}>Persons</MenuItem>
              </NavLink>
              <NavLink to="/dragdrop">
                <MenuItem onClick={handleMenuClose}>Drag and drop</MenuItem>
              </NavLink>
              <NavLink to="/undoredo">
                <MenuItem onClick={handleMenuClose}>Undo and redo</MenuItem>
              </NavLink>
              <NavLink to="/canvashouse">
                <MenuItem onClick={handleMenuClose}>Canvas house</MenuItem>
              </NavLink>
              <NavLink to="/currencyconverter">
                <MenuItem onClick={handleMenuClose}>Currency converter</MenuItem>
              </NavLink>
              <NavLink to="/translation">
                <MenuItem onClick={handleMenuClose}>Translation</MenuItem>
              </NavLink>
              <NavLink to="/contextmenu">
                <MenuItem onClick={handleMenuClose}>Context menu</MenuItem>
              </NavLink>
            </Menu>
            </div>
          </Toolbar>
        </AppBar>           
      </div>
  );
}
 
export default Navigation;