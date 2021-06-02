//JavaScript for Main Screen
/*----- constants -----*/
const backgroundAudio = new Audio ("firstsound.mp3") // Blz - July on YouTube: https://www.youtube.com/watch?v=0BhFjgqCfqs

/*----- app's state (variables) -----*/
let currentPlayer = "rocket2.png"

/*----- cached element references -----*/
let btnEl = document.getElementById("button")
let btnEl2 = document.getElementById("button2")
let headingEl = document.getElementById("first-text")
let headingEl2= document.getElementById("second-text")
let alienEl = document.getElementById("alien")
let audioBtnEl = document.querySelector(".sound-button")
let audioBtnStyle = document.getElementById("change-style")

/*----- event listeners -----*/
btnEl.addEventListener("click", myButtonWasClicked)
audioBtnEl.addEventListener("click", playAudio)
audioBtnStyle.addEventListener("click", changeStyle)

/*----- functions -----*/
function myButtonWasClicked() {
    headingEl.innerHTML = "Looks like we have visitors."
    headingEl2.innerHTML = "The aliens are challenging you to a match!"
    btnEl.innerHTML = "Start the match!"
}

function playAudio() {
    backgroundAudio.play()
    playAudio()
}



function changeStyle() {
    audioBtnEl.style.color = "white";
    audioBtnEl.innerHTML = "Sound Enabled";

}


