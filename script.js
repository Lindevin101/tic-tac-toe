let Board = document.getElementsByClassName("Board")
let Box = document.getElementsByClassName("box")
for (let i = 0; i < Box.length; i++){
  Box[i].addEventListener("click", doThis)
}
let possibilites = [["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"], ["c1", "b2", "a3"], ["a1", "b2", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]]
let player = 0
function doThis() {
  if (player === 0) {
    document.getElementById(event.target.id).style.backgroundColor = "blue";
    event.target.dataset.type = "clicked"
    for (let i = 0; i < possibilites.length; i++) {
      for (let j = 0; j < possibilites[i].length; j++) {
        if (possibilites[i][j] === event.target.id) {
          possibilites[i][j] = "blue"
        }
      }
    }
    whosTurn.innerText = "Red's Turn"
    checkWIN()
    player = 1
  }
  else {
    document.getElementById(event.target.id).style.backgroundColor = "red";
    event.target.dataset.type = "clicked"
    for (let i = 0; i < possibilites.length; i++) {
      for (let j = 0; j < possibilites[i].length; j++) {
        if (possibilites[i][j] === event.target.id) {
          possibilites[i][j] = "red"
        }
      }
    }
    whosTurn.innerText = "Blue's Turn"
    checkWIN()
    player = 0
  }
  function checkWIN() {
    counter = 0
    for (let i = 0; i < possibilites.length; i++) {
      if (possibilites[i][0] === "blue" && possibilites[i][1] === "blue" && possibilites[i][2] === "blue") {
        modalContent.innerText = "Blue Wins"
        ToggleModal()
      }
      if (possibilites[i][0] === "red" && possibilites[i][1] === "red" && possibilites[i][2] === "red") {
        modalContent.innerText = "Red Wins"
        ToggleModal()
      }
    }
    for (let i = 0; i < Box.length; i++){
      if (Box[i].dataset.type === "clicked") {
        counter++
      }
      if (counter === 9) {
        modalContent.innerText = "Its a Tie"
        counter = 0
        ToggleModal()
      }
    }
  }
}

function reset() {
  for (let i = 0; i < Box.length; i++){
    Box[i].style.backgroundColor = "#ffff3"
  }
  possibilites = [["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"], ["c1", "b2", "a3"], ["a1", "b2", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]]
  for (let i = 0; i < Box.length; i++){
    Box[i].dataset.type = "poop"
  }
}