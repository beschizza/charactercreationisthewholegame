
function colorize(imageId, src, hex) {

	return new Promise(function(resolve, reject) {
		 
		console.log("colorizing #" + imageId + " with " + hex);
		 
		/* Colorizes an image while respecting luminance 
		
			Won't work on file:// on most browsers, use a webserver
		
				colorize("img element ID","hex color you want"); 	*/
		
		// var image = document.getElementById(imageId.replace('#','')); 			// get the target's id 
		
		// console.log("colorizing #" + image + " with " + hex);
		
		// Turn the Hex value supplied by our intrepid developer into an RGB value
		
		var c = hex.replace('#','');
		var	r = parseInt(c.substring(0,2), 16);
		var	g = parseInt(c.substring(2,4), 16);
		var	b = parseInt(c.substring(4,6), 16);
		var targetRGB = [+r, +g, +b];
		
		var base_image = new Image();							// load the image
		base_image.src = src;

		
		base_image.onload = function() {						// when the image is loaded...
		
			// Create an invisible canvas element to do our wicked work
			
			var canvas = document.createElement('canvas'); 
			canvas.id     = "colorizeThe"+imageId;
			canvas.width  = base_image.width; 
			canvas.height = base_image.height;
			var context = canvas.getContext('2d');
			//document.body.appendChild(canvas); 				//uncomment to render the otherwise-invisible canvas
				
			context.drawImage(base_image, 0, 0);				//draw the image in our temporary canvas

			// read the image data from the canvas into a variable. Sadly can't be done directly from the Image() constructor */
			
			// if(canvas.width == 0 && canvas.height == 0) {
			// 	return resolve();
			// }

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
			
			var image = document.getElementById(imageId.replace('#',''));	
			image.src = url; 									//and puts it back into the original html img
			
			// console.log('done');
			resolve(image);
	  }
	});
}
