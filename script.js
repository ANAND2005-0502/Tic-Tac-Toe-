let btns = document.querySelectorAll(".btn");
let reset = document.querySelector("#restart");
let newGame = document.querySelector("#newGame");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let main = document.querySelector(".main");
let turnX = true;
 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 const resetGame= () =>{
   main.classList.remove("hide");
   turnX = true;
   enable();
   msgcont.classList.add("hide");
 }
 const disabled = () =>{
   for (let btn of btns) {
      btn.disabled = true;
   }
   }
btns.forEach((btns) =>{
 btns.addEventListener("click",()=>{
  if (turnX) {
   btns.innerText="X";
   turnX = false;
  }else{
   btns.innerText = "O";
   turnX = true;
  }
 btns.disabled = true;
  checkWinner();
  
 })
});

const enable = () =>{
   for (let btn of btns) {
      btn.disabled = false;
      btn.innerText = "";
   }   
   }
const showWinner = (Winner) => {
msg.innerText = `Congratulation Winner is ${Winner}`;
msgcont.classList.remove("hide");
}
const checkWinner= () =>{
for(let pattern of winPatterns){
   let posValue1 = btns[pattern[0]].innerText;
  let posValue2 =  btns[pattern[1]].innerText;
   let posValue3 = btns[pattern[2]].innerText;
   if (posValue1 !="" && posValue2 != "" && posValue3 != "") {
      if(posValue1===posValue2 && posValue2 ===posValue3){
         disabled();
        showWinner(posValue1);
        main.classList.add("hide");
      }
   }
}
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click" , resetGame);