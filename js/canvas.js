const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const gui = new dat.GUI();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
	y: canvas.height / 2,
	length: 0.01,
	amplitude: 100
}

gui.add(wave, "y", 0, canvas.height);
gui.add(wave, "length", -0.01, 0.01);
gui.add(wave, "amplitude", -300, 300);

function animation(){
	requestAnimationFrame(animation);
	c.beginPath();

	c.moveTo(0, window.innerHeight / 2);
	for(let i = 0; i < canvas.width; i++){
		c.lineTo(i, wave.y + Math.sin(i * wave.length) * wave.amplitude)
	}

	c.stroke();
}

//animation();




<<<<<<< HEAD
c.stroke();
=======
>>>>>>> dev
