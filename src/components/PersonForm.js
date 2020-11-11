import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme =>({
    paperStyle: {
        minWidth: 250,
        maxWidth: 600,
        padding: theme.spacing(2),
    },
    buttons: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    tableheading: {
        fontWeight: "bold",
        fontFamily: "Trebuchet MS, Helvetica, sans-serif",
        fontSize: "1.2em",
    }
}));

const PersonForm = () => {

    const [name, setName] = React.useState("");
    const [student, setStudent] = React.useState(false);
    const [items, setItems] = React.useState([]);

    const classes = useStyles();

    const changeName = (event) => {
        setName(event.target.value);
    }
    const addName = (event) => {
        setItems(items.concat([{"name": name, "student": student}]))
        setName("");
    }
    const changeSwitch = (event, selected) => {
        setStudent(selected);
    }

    return (
   
        <Paper className={classes.paperStyle}>
            <FormGroup>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={changeName}
                >
                    {name}
                </TextField>
                <FormControlLabel
                  control={<Switch checked={student} onChange={changeSwitch} value="student"/>}
                  label="student"
                />
            </FormGroup>
              
            <Button
              variant="contained"
              className={classes.buttons}
              onClick={addName}
              disabled={name.length < 1}
            >
                Add
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableheading}>Name</TableCell>
                            <TableCell className={classes.tableheading}>Status</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {items.map((row, i) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.student?"student":"not student"}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>   
        </Paper>      
    );
}

export default PersonForm;

