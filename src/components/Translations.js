import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import translations from '../resources/translations.json';

const Translations = () => {

    const [locale, setLocale] = React.useState("en");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [reversed, setReversed] = React.useState("");
    
	const texts = translations.hasOwnProperty(locale)?translations[locale]:translations["en"];

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = (event) => {
        setAnchorEl(null);
    }

    const menuOpen = Boolean(anchorEl);

    const handleChange = (event) => {
        let newString = event.target.value.split("").reverse().join("");
        setReversed(newString);
    }

	return (
		<Box border={1} width={400} p={1}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleMenu}
            >
                {locale}
            </Button>
            <Menu
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={menuOpen}
				onClose={handleMenuClose}        
            >
                <MenuItem 
                    onClick={(event) => {setLocale("en"); setAnchorEl(null);}}
                >
                    EN
                </MenuItem>
                <MenuItem
                    onClick={(event) => {setLocale("fi"); setAnchorEl(null);}}
                >
                    FI
                </MenuItem>
                <MenuItem
                    onClick={(event) => {setLocale("es"); setAnchorEl(null);}}
                >
                    ES
                </MenuItem>
            </Menu>
            <Typography>{texts.REV_INPUT}</Typography>
            <TextField
                onChange={handleChange}
            >

            </TextField>
            <Typography>{texts.REV_OUTPUT}</Typography>
            <Typography>{reversed}</Typography>
		</Box>
	);
}

export default Translations;
