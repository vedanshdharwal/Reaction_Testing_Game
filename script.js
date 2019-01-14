			var start = new Date().getTime();
			
			function getRandomColor() {
				var letters = "0123456789ABCDEF".split("");
				var color = "#";
				// any color is in the formate "000FFF" 
				for(var i = 0; i<6 ; i++) {
					color += letters[Math.floor(Math.random()*16)];  // 0 to 15
				}
				return color;
			}
			
			function makeShapeAppear(){
				
				var top = Math.random() * 400;
				var left = Math.random() * 400;
				var width = (Math.random() * 200) + 100;
				
				if(Math.random() > 0.5) {
					document.getElementById("shape").style.borderRadius  = "50%";
				} else {
					document.getElementById("shape").style.borderRadius  = "0";
				}
				
				document.getElementById("shape").style.background = getRandomColor();
				document.getElementById("shape").style.top = top + "px";
				document.getElementById("shape").style.left = left + "px";
				document.getElementById("shape").style.width = width + "px";
				document.getElementById("shape").style.height = width + "px";
				
				document.getElementById("shape").style.display = "block";
				//to start time from when the shape appears
				start = new Date().getTime();
			}
		
			//to set time for the shape to apppear after x miliseconds
			function appearAfterDelay(){
			setTimeout(makeShapeAppear,Math.random()*2000);
			}
			appearAfterDelay();
			
			document.getElementById("shape").onclick = function(){
				document.getElementById("shape").style.display = "none";
				var end = new Date().getTime();
				var timeTaken = (end -start)/1000;
				document.getElementById("timeTaken").innerHTML = timeTaken + "s"; 
				appearAfterDelay();
			}
			
		