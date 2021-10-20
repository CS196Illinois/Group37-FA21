import React from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    const[anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <IconButton 
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/"> Home </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/Tool"> GPA Tool </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/Feedback"> Feedback </MenuItem>
        </Menu>
      </>
    )
  }