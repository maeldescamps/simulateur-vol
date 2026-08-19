let keys={};


document.addEventListener(
"keydown",
e=>{
keys[e.key]=true;
});


document.addEventListener(
"keyup",
e=>{
keys[e.key]=false;
});



function update(){


if(keys["w"])
planePhysics.throttle +=0.01;


if(keys["s"])
planePhysics.throttle -=0.01;



if(keys["ArrowUp"])
planePhysics.pitch +=0.01;


if(keys["ArrowDown"])
planePhysics.pitch -=0.01;



if(keys["ArrowLeft"])
planePhysics.roll -=1;


if(keys["ArrowRight"])
planePhysics.roll +=1;



planePhysics.update();



document.getElementById("altitude").innerHTML =
Math.round(planePhysics.altitude);


document.getElementById("speed").innerHTML =
Math.round(planePhysics.speed);



document.getElementById("roll").innerHTML =
Math.round(planePhysics.roll);



plane.style.transform =
`
translate(-50%,-50%)
rotate(${planePhysics.roll}deg)
`;



requestAnimationFrame(update);

}


update();