import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; 

const useStyles = makeStyles(theme =>({
    text: {
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        border: "1px solid black",
        fontSize: "1.3em",
        backgroundColor: "rgb(224, 224, 224)",
    },
    container: {
        maxWidth: "50%", 
        borderRadius: "15px",
    }

}));


const DragDrop = () => {

    const [text1, setText1] = React.useState("1st text");
    const [text2, setText2] = React.useState("2nd text");
    const [text3, setText3] = React.useState("3rd text");

    const classes = useStyles();

    const handleDragStart = (event, key) => {
        
        let text;
        if (key === 1) {
            text = text1;
        }
        else if (key === 2) {
            text = text2;
        }
        else if (key === 3) {
            text = text3;
        }
        event.dataTransfer.setData("text/plain", text);
        event.dataTransfer.setData("text/html", "<h3>" + text + "<h3>");
        event.dataTransfer.dropEffect = "copy";
        
    }
    const handleDrop = (event, key) => {
        var items = event.dataTransfer.items;
		for (var i = 0; i < items.length; ++i) {
			var item = items[i];
			if (item.kind === 'string') {
				event.preventDefault();
                const data = event.dataTransfer.getData("text/plain");
                if (key === 1) {
                    setText1(data);
                }
                else if (key === 2) {
                    setText2(data);
                }
                else if (key === 3) {
                    setText3(data);
                }
				
				return;
			}
		}
		event.preventDefault();
    }
    const handleDragEnter = (event) => {

    }
    const handleDragOver = (event) => {
        event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
    }
    

    return (
      <div>
        <Box display="flex" flexWrap="wrap" className={classes.container}>
          <Typography>
            Drag the boxes over one another or select and drag any text over one of the boxes. 
          </Typography>
          <Typography
              variant="h3"
              className={classes.text}
              draggable={true}
              onDragStart={(e) => {handleDragStart(e, 1)}} 
              onDrop={(e) => {handleDrop(e, 1)}}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
          >
              {text1}
          </Typography>       
          <Typography
              variant="h3"
              className={classes.text}
              draggable={true}
              onDragStart={(e) => {handleDragStart(e, 2)}} 
              onDrop={(e) => {handleDrop(e, 2)}}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
          >
              {text2}
          </Typography>           
          <Typography
              variant="h3"
              className={classes.text}
              draggable={true}
              onDragStart={(e) => {handleDragStart(e, 3)}} 
              onDrop={(e) => {handleDrop(e, 3)}}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
          >
              {text3}
          </Typography>
        </Box>
      </div>    
    );
}

export default DragDrop;

