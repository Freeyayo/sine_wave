const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const gui = new dat.GUI();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
	y: canvas.height / 2,
	length: 0.01,
	amplitude: 100,
	frequency: 0.01
}

const strokeColor = {
	h: 0,
	l: 50,
	s: 50
}

const backgroundColor = {
	r: 0,
	g: 50,
	b: 50,
	a: 1
}

const waveFolder = gui.addFolder("wave");
waveFolder.add(wave, "y", 0, canvas.height);
waveFolder.add(wave, "length", -0.01, 0.01);
waveFolder.add(wave, "amplitude", -300, 300);
waveFolder.add(wave, "frequency", 0.01, 1); 

const strokeFolder = gui.addFolder("stroke");
strokeFolder.add(strokeColor, "h", 0, 255);
strokeFolder.add(strokeColor, "l", 0, 100);
strokeFolder.add(strokeColor, "s", 0, 100);

const backgroundFolder = gui.addFolder("background");
backgroundFolder.add(backgroundColor, "r", 0, 255);
backgroundFolder.add(backgroundColor, "g", 0, 255);
backgroundFolder.add(backgroundColor, "b", 0, 255);
backgroundFolder.add(backgroundColor, "a", 0, 1);

let increament = wave.frequency;
function animation(){
	requestAnimationFrame(animation);
	//c.clearRect(0, 0, canvas.width, canvas.height);
	c.fillStyle = `rgba(${backgroundColor.r}, 
						${backgroundColor.g}, 
						${backgroundColor.b}, 
						${backgroundColor.a})`;
	c.fillRect(0, 0, canvas.width, canvas.height);

	c.beginPath();

	c.moveTo(0, window.innerHeight / 2);
	for(let i = 0; i < canvas.width; i++){
		c.lineTo(i, wave.y + Math.sin(i * wave.length + increament) * 
					wave.amplitude * 
					Math.sin(increament))
	}

	c.strokeStyle = `hsl(${strokeColor.h * Math.sin(increament)},
						 ${strokeColor.s}%,
						 ${strokeColor.l}%)`
	c.stroke();
	increament += wave.frequency;
}

animation();




<<<<<<< HEAD
c.stroke();
=======
>>>>>>> dev
