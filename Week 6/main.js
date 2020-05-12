var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("rc");

//background: linear-gradient(to right, #ff0000, #eeff00);
let temp = "background: linear-gradient(to right, #000062, #d9d900);";
let hex1 = temp.split("#")[1];
let hex2 = temp.split("#")[2];

// color1.value = "#"+hex1.slice(0,6);
// color2.value = "#"+hex2.slice(0,6);
color1.value = "#000062";
color2.value = "#d9d900";

//
setGradient();
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomColor);
//rc.addEventListener("click", randomColor);


function randomColor(){
    let newColor = createColor(); 
    let newColor2 = createColor();
    body.style.background = 
	"linear-gradient(to right, " 
	+ newColor 
	+ ", " 
	+ newColor2 
	+ ")";
    css.textContent = body.style.background + ";";
}
    

function createColor(){
    let rgb = [];
    for(let i = 0; i < 3; i++){
        let num = Math.floor(Math.random() * 256);
        rgb.push(num);
    }
    let newRgb = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + .6 +")";
    return newRgb;
}


/// Back-up function/ Why  I dont need this?
// function createColor2(){
//     let rgb = [];
//     for(let i = 0; i < 3; i++){
//         let num = Math.floor(Math.random() * 256);
//         rgb.push(num);
//     }
//     let newRgb = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
//     return newRgb;
// }



//========================Hex Value Generator=============================

// function createHexColor(){
//     let values = "0123456789ABCDEF";
//     color = "#";
//     for(let i = 0; i < 6; i++){
//         color = color + values[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// console.log(createHexColor())


//==========================Hex Value Generator -2 ==========================

// function createHexColor(){
//     let hex = [];
//     for(let i = 0; i < 3; i++){
//         let num = Math.floor(Math.random() * 256).toString(16);
//         if(num.length < 2){
//             num = "0" + num; 
//         }
//         hex.push(num);
//     }
//     let color = "#" + hex[0] + hex[1] + hex[2];
//     return color;
// }
// console.log(createHexColor())


