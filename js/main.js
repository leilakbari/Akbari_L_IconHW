console.log('JavaScript is running!');

/* This is a JS block conect
the last statement creats a variable - a chunck  of computer memory that
can hold refrences to data that you want to see. we're starting a 
reference to an element on the page with this line - we're telling 
JS to look for the element with the ID we spesify inside of the
round branches (the image tah with the ID of bitmapGraphic) 

element on the page */


// Step 1 - select the elements you want the user interac with// 
// let bitmapGraphic = document.querySelector("#bitmapGraphic");
let towelIcon = document.querySelector("#towelIcon");
let swimmingsuitIcon = document.querySelector("#swimmingsuitIcon");
let slippersIcon = document.querySelector("#slippersIcon");
let scarfIcon = document.querySelector("#scarfIcon");
let hatIcon = document.querySelector("#hatIcon");
let bikiniIcon = document.querySelector("#bikiniIcon");
let umbrellaIcon = document.querySelector("#umbrellaIcon");
let watchIcon = document.querySelector("#watchIcon");
let pantsIcon = document.querySelector("#pantsIcon");
let shirtIcon = document.querySelector("#shirtIcon");


// Step 3 - what happens when event is triggered?// 
// function logID () {
//     console.log(this.id);
// }
function towelIcon () {
    console.log(this.id);
}

function swimmingsuitIcon () {
    console.log(this.id);
}

function slippersIcon () {
    console.log(this.id);
}

function scarfIcon () {
    console.log(this.id);
}

function hatIcon () {
    console.log(this.id);
}

function bikiniIcon () {
    console.log(this.id);
}

function umbrellaIcon () {
    console.log(this.id);
}

function watchIcon () {
    console.log(this.id);
}

function pantsIcon () {
    console.log(this.id);
}

function shirtIcon () {
    console.log(this.id);
}

// Step 2 - how do you want the user interac with the element// 
// bitmapGraphic.addEventListener('click',logID);
towelIcon.addEventListener('click',towelIcon);
wimmingsuitIcon.addEventListener('click',wimmingsuitIcon);
slippersIcon.addEventListener('click',slippersIcon);
scarfIcon.addEventListener('click',scarfIcon);
hatIcon.addEventListener('click',hatIcon);
bikiniIcon.addEventListener('click',bikiniIcon);
umbrellaIcon.addEventListener('click',umbrellaIcon);
watchIcon.addEventListener('click',watchIcon);
pantsIcon.addEventListener('click',pantsIcon);
shirtIcon.addEventListener('click',shirtIcon);