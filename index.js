let firstCard=10;
let secondCard=4;
let cards=[firstCard, secondCard];
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let message="";
let messageV=document.getElementById("message")
let sumV=document.querySelector("#sum-p")
let cardsV=document.querySelector("#cards-p")

function start(){
    sumV.textContent="Sum: " + sum;
    cardsV.textContent="Cards: "+cards[0]+ " & " +cards[1];
    if(sum<=20)
        message="Do you want to draw a new card? 🙂"
    else if(sum===21)
        message="You've got Black Jack! 🥳"
    else{
        message="You're out of game!"
        isAlive=false;
    }
    messageV.textContent=message;
}
function run(){
    start()
}
function newCard(){
    let card=7;
    sum+=card;
    start();
}