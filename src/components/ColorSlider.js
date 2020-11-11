import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const ColorSlider = () => {

    const [red, setRed] = React.useState(255);
	const [green, setGreen] = React.useState(255);
	const [blue, setBlue] = React.useState(255);
	
	const updateColor = (component, value) => {
		if (component === 0)
			setRed(value);
		if (component === 1)
			setGreen(value);
		if (component === 2)
			setBlue(value);
	}
	
	const color = "rgb(" + red + "," + green + "," + blue + ")";

	return (
		<div style={{backgroundColor: color, padding: "10%", height: "50%", width: 200, textAlign:"center", border: "1px solid black"}}>
            <h1 style={{marginBottom: 10, fontSize: "1.5em"}}>
                RGB slider
            </h1>
            <div style={{height: "12em"}}>
				<Slider
                    style={{color: "red"}}
					value={red}
					orientation="vertical"
					valueLabelDisplay="auto"
					step={1}
					min={0}
					max={255}
					onChange={(event, value) => updateColor(0, value)}
				/>
				<Slider
                    style={{color: "green"}}
					value={green}
					orientation="vertical"
					valueLabelDisplay="auto"
					step={1}
					min={0}
					max={255}
					onChange={(event, value) => updateColor(1, value)}
				/>
				<Slider
                    style={{color: "blue"}}
					value={blue}
					orientation="vertical"
					valueLabelDisplay="auto"
					step={1}
					min={0}
					max={255}
					onChange={(event, value) => updateColor(2, value)}
				/>
                <Typography>
                    {color}
                </Typography>
			</div>
		</div>      
    );
}

export default ColorSlider;

