const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.beginPath();

c.moveTo(0, window.innerHeight / 2);
c.lineTo(window.innerWidth , window.innerHeight / 2);

//c.stroke();