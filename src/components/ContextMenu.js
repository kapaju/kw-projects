import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const ContextMenu = () => {
   
    const [mouseX, setMouseX] = React.useState(null);
    const [mouseY, setMouseY] = React.useState(null);

    const [input, setInput] = React.useState("");
    const [text, setText] = React.useState("<<< Change me >>>");
    
    const fonts = ["Arial", "Impact", "Georgia", "Comic Sans MS"];
    const [font, setFont] = React.useState(fonts[0]);

    const colors = ["#fff", "#ffdeb5", "#c5b5ff", "#d0ffb5"];
    const [color, setColor] = React.useState(colors[0]);

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleButtonClick = (event) => {
        setText(input);
    }

    const handleClick = (event) => {
      event.preventDefault();
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    }

    const handleClose = () => {
		setMouseX(null);
		setMouseY(null);
    }

    const changeFont = () => {

        let newFont = fonts[Math.floor(Math.random()*fonts.length)];
        setFont(newFont);
        setInput("");
    }

    const changeColor = (event) => {

        let newColor = colors[Math.floor(Math.random()*fonts.length)];
        setColor(newColor);
    }

	return (
        <div>
	    <Box border={1} width={300} p={2}>
            <Box>
				<Input
                    value={input}
                                style={{width: "60%", fontFamily: font, backgroundColor: color}}
                    onChange={handleChange}
                    onContextMenu={handleClick}
				>
				</Input>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleButtonClick}
                    style={{margin: 10}}
                >
                    Change
                </Button>
                <Typography
                    style={{margin: 10, fontFamily: font}}
                >
                    {text}
                </Typography>

                <Menu
                    keepMounted
                    open={mouseY !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                            (mouseY !== null && mouseX !== null) ? 
                            { top: mouseY, left: mouseX } : undefined
                        }
                    >
                    <MenuItem onClick={(e) => {changeFont(); handleClose(e);}}>Change font</MenuItem>
                    <MenuItem onClick={(e) => {changeColor(); handleClose(e);}}>Change color</MenuItem>
                </Menu>
			</Box>
		</Box>
        <Typography>
                Right click on the textfield to change font and colour.   
        </Typography>	
        </div>
	);
}

export default ContextMenu;
