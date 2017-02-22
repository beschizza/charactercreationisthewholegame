
function colorize(image,hex) {
	 
	/* Colorizes an image while respecting luminance 
	
		Won't work on file:// on most browsers, use a webserver
	
			colorize("img element ID","hex color you want"); 	*/
	
	image = image.replace('#','');
	image = document.getElementById(image); 			// get the target's id 
	
	// Turn the Hex value supplied by our intrepid developer into an RGB value
	
	hex = hex.replace('#','');
	var	r = parseInt(hex.substring(0,2), 16);
	var	g = parseInt(hex.substring(2,4), 16);
	var	b = parseInt(hex.substring(4,6), 16);
	var targetRGB = [+r, +g, +b];
	
	base_image = new Image();							// load the image
	base_image.src = image.src;
		
	if (image.longDesc) {								// check to see if an original URL is stashed in the longdesc attribute
		baseImageURL = image.longDesc;					// this is put there after replacing the image with the colorized version	
		base_image.src = image.longDesc;				// so we can recolor the original again if we like
	}
	else {
		baseImageURL = image.src;						// var to stash the original image url, for the longdesc
	}
	
	base_image.onload = function() {						// when the image is loaded...
	
		// Create an invisible canvas element to do our wicked work
		
		var canvas = document.createElement('canvas'); 
		canvas.id     = "colorizeThe"+image.id;
		canvas.width  = base_image.width; 
		canvas.height = base_image.height;
		context = canvas.getContext('2d');
		//document.body.appendChild(canvas); 				//uncomment to render the otherwise-invisible canvas
			
		context.drawImage(base_image, 0, 0);				//draw the image in our temporary canvas

		// read the image data from the canvas into a variable. Sadly can't be done directly from the Image() constructor */
		
		var imgData=context.getImageData(0,0,canvas.width,canvas.height);

		// for each pixel...
		
		for (var i=0;i<imgData.data.length;i+=4) { // each pixel's value serialized as r g b a  
		
			var average =  (imgData.data[i] +  imgData.data[i+1] +  imgData.data[i+2]) /3; // get the grayscale value		
			
			var rcurve = (average*2) - (255-targetRGB[0]);	// this turns grayscale into nice saturated colors
			var gcurve = (average*2) - (255-targetRGB[1]);	// without white getting darkened to the target color
			var bcurve = (average*2) - (255-targetRGB[2]);	// unlike most other color-tint js stuff 
																												
			imgData.data[i]=rcurve; 						//red
			imgData.data[i+1]=gcurve; 						//green
			imgData.data[i+2]=bcurve; 						//blue
			//imgData.data[i+3]=imgData.data[i+3];			//leave alpha alone
		}
			
		context.putImageData(imgData,0,0); 					//draws the new pixels onto the canvas
		
		var url = canvas.toDataURL(); 						//turns the canvas into a data url
		
		image.src = url; 									//and puts it back into the original html img
		image.longDesc = baseImageURL; 						//the original image url becomes the longdesc
		
  }
}
