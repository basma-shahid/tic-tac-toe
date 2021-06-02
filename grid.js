/*----- constants -----*/
const backgroundAudio = new Audio ("blzjuly.mp3") // Blz - July on YouTube: https://www.youtube.com/watch?v=0BhFjgqCfqs
/*----- app's state (variables) -----*/
let currentPlayer = "X"
let gameBoard = ["", "", "", "", "", "", "", "", ""]
/*----- cached element references -----*/
let boxEl = document.getElementById("container")
let playerEl = document.getElementById("player")
let winnerStatus = document.getElementById("winnerstatus")
let box1 = document.getElementById("0")
let box2 = document.getElementById("1")
let box3 = document.getElementById("2")
let box4 = document.getElementById("3")
let box5 = document.getElementById("4")
let box6 = document.getElementById("5")
let box7 = document.getElementById("6")
let box8 = document.getElementById("7")
let box9 = document.getElementById("8")
let resetEl = document.getElementById("reset")
let audioBtnEl = document.querySelector(".sound-button")
let audioBtnStyle = document.getElementById("change-style")

/*----- event listeners -----*/
boxEl.addEventListener("click", boxWasClicked)
resetEl.addEventListener("click", resetGame)
audioBtnEl.addEventListener("click", playAudio)
audioBtnStyle.addEventListener("click", changeStyle)


/*----- functions -----*/
function boxWasClicked(evt) {
        if (gameBoard[parseInt(evt.target.id)] === "") {
        gameBoard[parseInt(evt.target.id)] = currentPlayer
        changePlayer()
        render()
        winningConditions()
        tieCondition()
    }
}


function changePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else if (currentPlayer === "O") {
        currentPlayer = "X"
    }

}

const winningConditions = () => {
    const gb = gameBoard
    const row1 = [gb[0], gb[1], gb[2]].every(val => val === "X")
    const row10 = [gb[0], gb[1], gb[2]].every(val => val === "O")
    const row2 = [gb[3], gb[4], gb[5]].every(val => val === "X")
    const row20 = [gb[3], gb[4], gb[5]].every(val => val === "O")
    const row3 = [gb[6], gb[7], gb[8]].every(val => val === "X")
    const row30 = [gb[6], gb[7], gb[8]].every(val => val === "O")
    const col1 = [gb[0], gb[3], gb[6]].every(val => val === "X")
    const col10 = [gb[0], gb[3], gb[6]].every(val => val === "O")
    const col2 = [gb[1], gb[4], gb[7]].every(val => val === "X")
    const col20 = [gb[1], gb[4], gb[7]].every(val => val === "O")
    const col3 = [gb[2], gb[5], gb[8]].every(val => val === "X")
    const col30 = [gb[2], gb[5], gb[8]].every(val => val === "O")
    const diag1 = [gb[0], gb[4], gb[8]].every(val => val === "X")
    const diag10 = [gb[0], gb[4], gb[8]].every(val => val === "O")
    const diag2 = [gb[2], gb[4], gb[6]].every(val => val === "X")
    const diag20 = [gb[2], gb[4], gb[6]].every(val => val === "O")
  
    if (row1 || row10 || row2 || row20 || row3 || row30 ||  col1 || col10  ||  col2 || col20 || col3  ||  col30  || diag1 || diag10  || diag2 || diag20 ) {
      winnerStatus.innerHTML = "We have a winner!"
      return true
    }
  
  }

  const tieCondition = () => {
      const gb = gameBoard
      const check = [gb[0], gb[1], gb[2], gb[3], gb[4], gb[5], gb[6], gb[7], gb[8]].every(val => val === "X")
      const check1 = [gb[0], gb[1], gb[2], gb[3], gb[4], gb[5], gb[6], gb[7], gb[8]].every(val => val === "O")  
        if (check || check1) {
        winnerStatus.innerHTML = "We have a tie."
          return true
        }
      }


function checkTie() {

}

function resetGame() {
    location.reload();
    gameBoard[0].value = "";
    gameBoard[1].value = "";
    gameBoard[2].value = "";
    gameBoard[3].value = "";
    gameBoard[4].value = "";
    gameBoard[5].value = "";
    gameBoard[6].value = "";
    gameBoard[7].value = "";
    gameBoard[8].value = "";

}


function render() {
    playerEl.innerHTML = currentPlayer
    box1.innerHTML = gameBoard[0]
    box2.innerHTML = gameBoard[1]
    box3.innerHTML = gameBoard[2]
    box4.innerHTML = gameBoard[3]
    box5.innerHTML = gameBoard[4]
    box6.innerHTML = gameBoard[5]
    box7.innerHTML = gameBoard[6]
    box8.innerHTML = gameBoard[7]
    box9.innerHTML = gameBoard[8]
}

function playAudio() {
    backgroundAudio.play()
    playAudio()
}



function changeStyle() {
    audioBtnEl.style.color = "white";
    audioBtnEl.innerHTML = "Sound Enabled";
}

