import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme =>({
    paperStyle: {
        minWidth: 300,
        maxWidth: 600,
        padding: theme.spacing(2),
        backgroundColor: '#FCEADA'
    },
    buttons: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

const Dates = () => {

 
    const [items, setItems] = React.useState([new Date()]);
    const [selected, setSelected] = React.useState(-1);

    const classes = useStyles();

    const dateformat = new Intl.DateTimeFormat("uk-EN", {year: 'numeric', month: 'numeric', day: 'numeric'})

    const handleChange = (event, i) => {
        let nd = new Date(event.target.value);
        let itemsUpdated = items.slice(0, i).concat([nd]).concat(items.slice(i+1));
		setItems(itemsUpdated);
    }   
    const add = (event) => {
        setItems(items.concat([new Date()]));
    }
    const select = (event, i) => {
		setSelected(i);
	}
    const remove = (event) => {
        setItems(items.slice(0, selected).concat(items.slice(selected+1)));       
		setSelected(-1);
    }


    return (
   
        <Paper className={classes.paperStyle}>
            <h1>
                Date picker
            </h1>
            <List>
                {items.map((item, i) => 
                        <ListItem
                            key={"listItem"+i}
                            button
                            onClick={(event) => {select(event, i)}}
                        >
                            <ListItemText
                                keu={"listText"+i}
                                primary={<Typography> {i+1}. {dateformat.format(item)}</Typography>} 
                            />
                            <TextField
                                key={"dateSelector"+i}
                                label="Date"
                                type="date"
                                value={item.toISOString().substring(0, 10)}
                                onChange={(event) => {handleChange(event, i)}}
                                InputLabelProps={{shrink: true}}
                            />
                        </ListItem>

                    )
                }

            </List>

            <Button 
                variant="contained" 
                color="primary"
                className={classes.buttons} 
                onClick={add}
            >
                Add
            </Button>
            <Button 
                variant="contained" 
                className={classes.buttons} 
                onClick={remove} 
                disabled={selected<0}
            >
                Remove
            </Button>
        </Paper>      
    );
}

export default Dates;

