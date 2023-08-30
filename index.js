
let playerObj={
    playerName:"Player 1",
    chips:250
}
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageV=document.getElementById("message")
let sumV=document.querySelector("#sum-p")
let cardsV=document.querySelector("#cards-p")
let playerV=document.getElementById("player")

playerV.textContent=playerObj.playerName + " : $" + playerObj.chips;

function start(){
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    isAlive=true;
    run()
}
function run(){
    sumV.textContent="Sum: " + sum;
    cardsV.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsV.textContent+=cards[i]+ " "
    }
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

function newCard(){
    if(isAlive===true&& hasBlackJack===false){
    let card=getRandomCard();
    sum+=card;
    cards.push(card)
    run();}
}
function getRandomCard(){
    let rando= Math.floor(Math.random()*13)+1;
    const result = rando === 1 ? 11 : rando >= 11 && rando <= 13 ? 10:rando;
    return result;
}