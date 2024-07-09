let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#new-game")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true //playerX,playerY
let count = 0

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],  
    [3, 4, 5],
    [6, 7, 8],
]

const resetgame = () => {
    turn0 = true;
    count = 0
    enableboxes()
    msgcontainer.classList.add("hide")
}

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
       if (turn0) {
            box.innerText = "O"
            turn0 = false
       }  else{
        box.innerText = "X"
        turn0 = true
       }
       box.disabled = true;
       count++;

       let iswinner = checkwinner();
       if(count === 9 && !iswinner){
        gamedraw()
       }
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulations ! ${winner} won the game.`
    msgcontainer.classList.remove("hide")
    disableboxes();
}

const checkwinner = () => {
    for(pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val!= "" && pos3val!="") {
            if (pos1val==pos2val && pos2val==pos3val) {
                console.log("winner", pos1val)
                showwinner(pos1val);
                box.disabled = true;
            }
        }
    }
}
newgamebtn.addEventListener("click", resetgame)
resetbtn.addEventListener("click", resetgame)