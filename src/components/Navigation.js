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
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/">Home</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/binaryconverter">Binary converter</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/anecdotes">Anecdotes</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/colors">Colors</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/mousedata">Mouse data</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/unicafe">Unicafe</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/colorslider">RGB slider</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/dates">Dates</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/personform">Persons</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/dragdrop">Drag and drop</NavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <NavLink to="/undoredo">Undo and redo</NavLink>
              </MenuItem>
            </Menu>
            </div>
          </Toolbar>
        </AppBar>           
      </div>
  );
}
 
export default Navigation;