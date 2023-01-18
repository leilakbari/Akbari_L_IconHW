console.log('JavaScript is running!');

/* This is a JS block conect
the last statement creats a variable - a chunck  of computer memory that
can hold refrences to data that you want to see. we're starting a 
reference to an element on the page with this line - we're telling 
JS to look for the element with the ID we spesify inside of the
round branches (the image tah with the ID of bitmapGraphic) 

element on the page */


// Step 1 - select the elements you want the user interac with// 
let bitmapGraphic = document.querySelector("#bitmapGraphic");

// Step 3 - what happens when event is triggered?// 
function logID () {
    console.log(this.id);
}

// Step 2 - how do you want the user interac with the element// 
bitmapGraphic.addEventListener('click',logID);