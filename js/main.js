// Break down the deliverable into parts
var colorNames = ["red", "blue", "green", "pink", "yellow", "black", "brown", "orange", "purple"]

var button = document.querySelector('button')
var body = document.querySelector('body')

function randomNumber(){
    return Math.floor( Math.random() * 10)
}

function handleClick(){
    body.style.background = colorNames[randomNumber()]
}

button.addEventListener('click', handleClick)



// Grab the button
// Grab the body
// Change the color
// add an event listener to the button
