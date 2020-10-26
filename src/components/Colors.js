import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    textStyle: {
        fontStyle: "italic",
        fontFamily: "monospace",
        fontSize: "5rem",
        textShadow: "2px 2px #ff0000",
        color: props => props.color,
    }
}));

const Colors = () => {

    const [textColour, setColour] = React.useState("blue");

    const styledClasses = useStyles({color: textColour});
    
    const colourChange = (event) => {
        setColour(event.target.value);
    }

    return (

        <Box>
            <Paper style={{width: 300, padding: 15}}>
                <Typography variant="h1" className={styledClasses.textStyle}>Colour</Typography>
                <FormControl>
                    <RadioGroup name="textColour" value={textColour} onChange={colourChange} >
                        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                        <FormControlLabel value="orange" control={<Radio />} label="Orange" />
                        <FormControlLabel value="red" control={<Radio />} label="Red" />
                        <FormControlLabel value="green" control={<Radio />} label="Green" />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </Box>
  );
}

export default Colors;