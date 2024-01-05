/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const lengthEl = document.getElementById("length-conversion");
const volumeEl = document.getElementById("volume-conversion");
const massEl = document.getElementById("mass-conversion");
const pageMoodEl = document.getElementById("page-mood");
const containerBtnEl = document.getElementById("container-btn");
const box1El = document.getElementById("box1");
const box2El = document.getElementById("box2");
const box3El = document.getElementById("box3");


let meterToFeet = "";
let feetToMeter = "";
let literToGallon = "";
let gallonToLiter = "";
let kiloToPounds = "";
let poundsToKilo = "";
let number = 0;
let darkMode = true;

buttonEl.addEventListener("click", function(){
   
    number = inputEl.value;
    /*Code below is to avoid rendering the 
     conversions back to 0 when the convert button
     is being clicked, so instead it keeps the conversion
     at 20, same as the placeHolder value which is 20
    */
    let number2 = number;
    if(number2 == ""){
        number = 20;
    }
    
    // Meter to feet and feet to meter variables
    meterToFeet = number * 3.28084;
    feetToMeter = (number/ 3.28084);
    // Displaying the results for the length conversions
    lengthEl.textContent = `${number} meters = ${meterToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeter.toFixed(3)} meters`
    
    //  Liter to gallon and feet to meter variables
    literToGallon = number * 0.264172;
    gallonToLiter = number/ 0.264172;
    
    // Displaying the results for the volume conversions
    volumeEl.textContent = `${number} liters = ${literToGallon.toFixed(3)} gallons | ${number} gallons = ${gallonToLiter.toFixed(3)} liters`;
    
    // Kilograms to pounds and pounds to kilograms variables
    kiloToPounds = number * 2.20462;
    poundsToKilo = number/2.20462;
    
    // Displaying the result for the mass conversions
    massEl.textContent = `${number} kilos = ${kiloToPounds.toFixed(3)} pounds | ${number} pounds = ${poundsToKilo.toFixed(3)} kilos`;
})


// Adding the Darkmode eventListener to the #page-mood button
pageMoodEl.addEventListener("click", function (){
    
    if(darkMode){
        pageMoodEl.style.background = "#1F2937";
        pageMoodEl.style.color = "#CCC1FF";
        pageMoodEl.textContent = "Dark mode 🌙";
        pageMoodEl.style.borderColor = "white";
        massEl.style.color = "red";
        containerBtnEl.style.background = "#1F2937";
        box1.style.background = "#273549";
        box2.style.background = "#273549";
        box3.style.background = "#273549";
        containerBtnEl.style.color = "#CCC1FF";
        lengthEl.style.color = "white";
        volumeEl.style.color = "white";
        massEl.style.color = "white";
        
        darkMode = false;
        
        
    } else {
        location.reload();
        
    }
})
