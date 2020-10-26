import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const MouseData = () => {

    const [fieldOne, setFieldOne] = React.useState("");
    const [fieldTwo, setFieldTwo] = React.useState("");
    const [fieldThree, setFieldThree] = React.useState("");
    const [rollDirection, setRollDirection] = React.useState("start");
    const [counter, setCounter] = React.useState(0);

    const handleClick = (event) => {
        let elemType = event.target.type;
        console.log(elemType);
        let content = "Mouse was clicked: type of element is " + elemType;
        setFieldOne(content);

    }
    const handleMove = (event) => {

        let x = event.pageX;
        let y = event.pageY;

        setFieldTwo("Moved mouse position to x: " + x + " y: " + y);
    }
    const handleWheel = (event) => {
        
        let data = rollDirection;
        let count = counter;
        if (event.deltaY > 0) {
            if (rollDirection == "down" || rollDirection == "start") {
                count += 1;
            }
            else {
                count = 1;           
            }
            data = "down";
            
        }
        else if (event.deltaY < 0) {
            if (rollDirection == "up" || rollDirection == "start" ) {
                count += 1;
            }
            else {
                count = 1;
            }
            data = "up";

        }
        setCounter(count);
        setRollDirection(data);
        setFieldThree("Rolled " + count + " times " + data);
    }

    return (
        <Paper style={{width: 400, textAlign: "center", padding: 15}}
         onMouseDown={handleClick} onMouseMove={handleMove} onWheel={handleWheel}> 
            <Box>
                <TextField value={fieldOne} variant="outlined" fullWidth></TextField>
            </Box>
            <br></br>
            <Box>
                <TextField value={fieldTwo} variant="outlined" fullWidth></TextField>
            </Box>
            <br></br>
            <Box>
                <TextField value={fieldThree} variant="outlined" fullWidth></TextField>
            </Box>
            <br></br>
            <Box>
                <Button id="button 1" variant="contained" color="primary"> Press here! </Button>
            </Box>
  
        </Paper>
    )

}

export default MouseData;