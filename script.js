
const rck = document.getElementById('rock');
const ppr = document.getElementById('paper');
const scissors = document.getElementById('Scissors');
const result_box = document.getElementById('result_box');
const result_message = document.getElementById('result_message');
const choice_box = document.getElementById('choices');
const message = document.getElementById('message');
const w_message = document.getElementById('win');
const d_message = document.getElementById('draw');
const l_message = document.getElementById('loss');


function pick() {
    const randomNo = Math.random()*100;

    if(randomNo<=33) return "rock";
    if(randomNo<=66) return "paper";
    if(randomNo<=100) return "scissors";


}

function removeChoices(){
    choice_box.style.display = "none";
}
function showChoices(){
    choice_box.style.display = "flex";
}
function removeResults(){
    result_box.style.display = "none";
}
function showResults(){
    result_box.style.display = "flex";
}
function loss(msg) {
    message.textContent = "Loss 😟"
    l_message.innerText = parseInt(l_message.innerText)+1;
    result_message.innerText = msg

}
function win(msg) {
    message.textContent = "Win 😲"
    w_message.innerText = parseInt(w_message.innerText)+1;
    result_message.innerText = msg

}
function draw(msg) {
    message.textContent = "Draw 🤥"
    d_message.innerText = parseInt(d_message.innerText)+1;
    result_message.innerText = msg

}

rck.addEventListener("click",()=>{
    const res = pick();
    if(res==="rock") draw("Rock & Rock Draws"); 
    if(res==="scissors") win("Paper Kicks out Scissors"); 
    if(res==="paper") loss("Rock Defeated by Paper"); 

    removeChoices()
    showResults()
})
ppr.addEventListener("click",()=>{
    const res = pick();
    if(res==="rock") win("Paper Kicks out Rock"); 
    if(res==="paper") draw("Paper & Paper Draws"); 
    if(res==="scissors") loss("Paper Defeated by Scissors"); 

    removeChoices()
    showResults()
})
scissors.addEventListener("click",()=>{
    const res = pick();
    if(res==="rock") loss("Scissors Defeated by Rock"); 
    if(res==="paper") win("Scissors Kicks out Paper"); 
    if(res==="scissors") draw("Scissors & Scissors Draws"); 

    removeChoices()
    showResults()
})

result_box.addEventListener("click",()=>{
    removeResults()
    showChoices()
    message.textContent = "Choose! 🤞🏻"

})
