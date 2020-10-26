import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const BinaryConverter = () => {

    const [binary, setBinary] = React.useState("00000000");
    const [decimal, setDecimal] = React.useState("0");
    const [state, setState] = React.useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
      });
    
      
    // Handles changes in checkbox states.
    // When checkbox is changed, changes the corresponding binary representation.
    const handleChange = key => event => {

        setState({ ...state, [key]: event.target.checked });
        let temp = "";

        for (let i = 0; i < 9; i++) {
            if (i == key - 1) {
                if (event.target.checked) {
                    temp += "1";
                }
                else {
                    temp += "0";
                }
            }
            else {
                temp += binary.charAt(i);
            }          
        }
        setBinary(temp);

    };

    const { one, two, three, four, five, six, seven, eight } = state;

    // Converts binary number to decimal after clickin a button.
    const handleClick = (event) => {

        let parsed = parseInt(binary, 2);
        setDecimal(parsed);
       
    }

    return (
        <Paper style={{width: 400, textAlign: "center", padding: 15}}>
            <Box>
                <FormControlLabel 
                    control={<Checkbox checked={one} onChange={handleChange(1)} value="one"></Checkbox>}
                />
                <FormControlLabel 
                    control={<Checkbox checked={two} onChange={handleChange(2)} value="two"></Checkbox>}
                />
                <FormControlLabel 
                    control={<Checkbox checked={three} onChange={handleChange(3)} value="three"></Checkbox>}
                />
                <FormControlLabel 
                    control={<Checkbox checked={four} onChange={handleChange(4)} value="four"></Checkbox>}
                />
                <FormControlLabel 
                    control={<Checkbox checked={five} onChange={handleChange(5)} value="five"></Checkbox>}
                />
                <FormControlLabel 
                    control={<Checkbox checked={six} onChange={handleChange(6)} value="six"></Checkbox>}
                />
                <FormControlLabel 
                    control={<Checkbox checked={seven} onChange={handleChange(7)} value="seven"></Checkbox>}
                />
                <FormControlLabel 
                    control={<Checkbox checked={eight} onChange={handleChange(8)} value="eight"></Checkbox>}
                />             
                
            </Box>
            <Box>
                <TextField value={binary} variant="outlined" />
            </Box>
            <br></br>
            <Box>
                <Button variant="contained" color="primary" onClick={handleClick}>Convert</Button>
            </Box>
            <br></br>
            <Box>
                <TextField value={decimal} variant="outlined" />
            </Box>
        </Paper>
    )

}

export default BinaryConverter;