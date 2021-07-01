'use strict';

// document.querySelector('.message').textContent;

// Get the img object using its Id
const img = document.getElementById("poster-image");
const yettrangURL = document.getElementById("yettrangLink")

function imgWindow() {
    window.open(img.src) 
}

// Function to increase image size
function enlargeImg() {
    // Set image size to 1.5 times original
    img.style.transform = "scale(1.5)";
    // Animation effect 
    img.style.transition = "transform 0.25s ease";
}

// Function to reset image size
function resetImg() {
    // Set image size to original
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}

// Open an URL in a new window
function newWindow() {
    window.open(yettrangURL.href)
}

// let value = 0;
// console.log(value > 0 && value < 10 ? `0${value}` : `${value}`);