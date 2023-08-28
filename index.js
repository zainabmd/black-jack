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
function start(){
    run()
}
function newCard(){
    let card=getRandomCard();
    sum+=card;
    cards.push(card)
    run();
}
function getRandomCard(){
    let rando= Math.floor(Math.random()*13)+1;
    const result = rando === 1 ? 11 : rando >= 11 && rando <= 13 ? 10:rando;
    return result;
}