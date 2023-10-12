let Board = document.getElementsByClassName("Board")
let Box = document.getElementsByClassName("box")
for (let i = 0; i < Box.length; i++) {
    Box[i]. addEventListener("click", doThis)
}
let possibilites = [["a1","a2","a3"],["b1","b2","b3"],["c1","c2","c3"],["c1", "b2", "a3"], ["a1", "b2", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]]
let player = 0
function doThis() {
if (player === 0) {
    document.getElementById(event.target.id).style.backgroundColor = "black";
    event.target.dataset.type = "clicked"
    for (let i = 0; i < possibilites.length; i++) {
        for(let j = 0; j < possibilites[i].length; j++) {
            if (possibilites[i][j]=== event.target.id) {
                possibilites[i][j] = "black"
            }
        }
    }
    whoTurn.innerText = "Green's Turn"
    checkWin()
    player = 1
}
else {
    document.getElementById(event.target.id).style.backgroundColor = "green";
    event.target.dataset.type = "clicked"
    for (let i = 0; i< possibilites.length; i++) {
        for (let j = 0; j< possibilites[i].length; j++)
        if(possibilites[i][j] === event.target.id) {
            possibilites[i][j] = "green"
        }
    }
}
whoTurn.innerText = "Black's Turn"
checkWin()
player = 0
}
function checkWin () {
    counter  = 0
    for (let i = 0; i < possibilites.length; i++) {
        if (possibilites[i][0] === "black" && possibilites[i][1] = "black" && possibilites[1][2]=== "black") {
            modelContent.innerText = "Black Wins"
            ToggleModel()
        }
        if (possibilites[i][0] === "green" && possibilites[i][1] = "green" && possibilites[1][2]=== "black") {
            modelContent.innerText = "Green Wins"
            ToggleModel()
        }
    }
    for (let i = 0; i < Box.length; i++) {
        if (Box[i].dataset.type === "clicked") {
            counter++
        }
        if(counter===9) {
            modal.Content.innerText = "Its a Tie"
            counter = 0
            ToggleModel()
        }
    }

}