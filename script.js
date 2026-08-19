let altitude = 1000;
let speed = 200;
let heading = 0;
let roll = 0;


let plane = document.getElementById("plane");


let keys = {};


document.addEventListener(
"keydown",
(e)=>{
keys[e.key]=true;
});


document.addEventListener(
"keyup",
(e)=>{
keys[e.key]=false;
});



function update(){

// accélération

if(keys["w"]){
speed += 1;
}

if(keys["s"]){
speed -= 1;
}


// montée descente

if(keys["ArrowUp"]){
altitude += 5;
}

if(keys["ArrowDown"]){
altitude -= 5;
}



// direction

if(keys["ArrowLeft"]){
heading -= 2;
roll -= 2;
}


if(keys["ArrowRight"]){
heading += 2;
roll += 2;
}


// retour naturel

roll *= 0.95;


// limites

if(speed<0)
speed=0;


if(altitude<0)
altitude=0;



// affichage

document.getElementById("altitude").innerHTML=
Math.round(altitude);


document.getElementById("speed").innerHTML=
Math.round(speed);


document.getElementById("heading").innerHTML=
Math.round(heading);


document.getElementById("roll").innerHTML=
Math.round(roll);



// rotation avion

plane.style.transform=
`
translate(-50%,-50%)
rotate(${roll}deg)
`;


// boucle

requestAnimationFrame(update);

}


update();