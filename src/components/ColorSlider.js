import React from 'react';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const ColorSlider = () => {

    const [background, setBackground] = React.useState("rgb(255, 255, 255)");
    const [redValue, setRedValue] = React.useState(255);
    const [blueValue, setBlueValue] = React.useState(255);
    const [greenValue, setGreenValue] = React.useState(255);
 
    const useStyles = makeStyles(theme =>({
        boxStyle: {
            height: 300,
            border: "1px solid black",
            width: 150,
            margin: theme.spacing(5),
            padding: theme.spacing(6),
            backgroundColor: background,
        },
        sliderStyle: {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1),
            color: "rgb(0, 0, 0)",
        },
        textStyle: {
            marginTop: theme.spacing(2),
        }
    }));

    const classes = useStyles();

    const updateColor = (event, newValue) => {

        if (event.target.id === "red") {
            setRedValue(newValue);
        }
        else if (event.target.id === "green") {
            setGreenValue(newValue);
        }
        else if (event.target.id === "blue") {
            setBlueValue(newValue);
        }
       
        
        let temp = "rgb(" + redValue + ", " + blueValue + ", " + greenValue + ")";
        setBackground(temp);
    }


    return (

        <div>
            <Box className={classes.boxStyle}>
                <Slider
                    id="red"
                    orientation="vertical"
                    valueLabelDisplay="auto"
                    value={redValue}
                    step={1}
                    min={0}
                    max={255}
                    className={classes.sliderStyle}
                    onChange={updateColor}
                />
                <Slider
                    id="green"
                    orientation="vertical"
                    valueLabelDisplay="auto"
                    value={greenValue}
                    step={1}
                    min={0}
                    max={255}
                    className={classes.sliderStyle}
                    onChange={updateColor}
                />
                <Slider
                    id="blue"
                    orientation="vertical"
                    valueLabelDisplay="auto"
                    value={blueValue}
                    step={1}
                    min={0}
                    max={255}
                    className={classes.sliderStyle}
                    onChange={updateColor}
                />
                <Typography className={classes.textStyle}>
                    {background}
                </Typography>
            </Box>
            

        </div>

        
    );
}

export default ColorSlider;

