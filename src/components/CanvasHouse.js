import React, {useRef, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const CanvasHouse = () => {

	const canvasRef = useRef(null);
    
    const paintHouse = (ctx, x, y) => {

		ctx.fillStyle = "#75390e";
		ctx.fillRect(x, y, 100, 100);

		// Draw ceiling
		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + 50, y - 50);
		ctx.lineTo(x + 100, y);
		ctx.lineTo(x, y);
		ctx.stroke();
		ctx.closePath();
		ctx.fill();

		ctx.fillRect(x + 45, y + 45, 20, 55);

	}
	
	useEffect(() => {
		
		let ctx = canvasRef.current.getContext('2d');          
		let [w, h] = [canvasRef.current.width, canvasRef.current.height];

		// Draw background
		ctx.fillStyle = "#5c9407";
		let midh = 0.5 * h;
		let midw = 0.5 * w;
		ctx.fillRect(0, 0, w, h);
		ctx.fillStyle = "#c5ddfc";
		ctx.fillRect(0, 0, w, midh);
        
		ctx.save();

		// Draw house 1
		let x = midw - 200;
		let y = midh - 100;
		paintHouse(ctx, x, y);

		// Draw house 2
		x = midw + 100;
		paintHouse(ctx, x, y);
		
		
	});
	return (
    <div> 
      <Box>
        <canvas
          width={600}
          height={600}
          ref={canvasRef}
        />
      </Box>
      <Typography>
        This image is drawn using Canvas.
      </Typography>
    </div>
	);
}

export default CanvasHouse;
