import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme =>({
    buttons: {
        margin: theme.spacing(1),
    },
    container: {
        maxWidth: 400, 
        height: 300, 
        border: "1px solid grey",
    },
    textArea: {
        backgroundColor: "#E3FFFF",
        minHeight: 25, 
        padding: 10,
    }
}));


const UndoRedo = () => {

    const [textStack, setTextStack] = React.useState([""]);
    const [undoStack, setUndoStack] = React.useState([]);
    const [redoStack, setRedoStack] = React.useState([]);

    const classes = useStyles();
    
    const addToText = (key) => {

        setTextStack(textStack.concat(key));
        setUndoStack(undoStack.concat([textStack]));
        setRedoStack([]);
    }
    const undo = () => {

        setRedoStack(undoStack.concat([textStack]));
        setTextStack(undoStack[undoStack.length-1]);
        setUndoStack(undoStack.slice(0, undoStack.length-1));

    }
    const redo = () => {
        
        setUndoStack(undoStack.concat([textStack]));
        setTextStack(redoStack[redoStack.length-1]);
        setRedoStack(redoStack.slice(0, redoStack.length-1));
    }


    return (

        <Box className={classes.container}>
            <Box className={classes.textArea}>
                <Typography variant="body1">
                    {textStack}
                </Typography>
            </Box>
            <Box>
                <Button 
                    variant="contained" 
                    className={classes.buttons}
                    onClick={(e) => {addToText(1)}}
                >
                    1
                </Button>
                <Button 
                    variant="contained" 
                    className={classes.buttons}
                    onClick={(e) => {addToText("a")}}
                >
                    a
                </Button>
                <Button 
                    variant="contained" 
                    className={classes.buttons}
                    onClick={(e) => {addToText("bcd")}}
                >
                    bcd
                </Button>
            </Box>
            <Box>
                <IconButton disabled={undoStack.length === 0} onClick={undo}>
                    <UndoIcon/>
                    </IconButton>
                <IconButton disabled={redoStack.length === 0} onClick={redo}>
                    <RedoIcon/>
                </IconButton>
            </Box>     
        </Box>
        
    );
}

export default UndoRedo;

