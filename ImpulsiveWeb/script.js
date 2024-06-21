const red = document.querySelector(".red-container");
const blue = document.querySelector(".blue-container");
const green = document.querySelector(".green-container");

red.addEventListener('click', function() {
    console.log("red is clicked");
})

blue.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("blue is clicked");
})

green.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("green is clicked");
})