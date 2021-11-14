// console.log(localStorage.animal, " - ", localStorage.level);

// var myvar='<?php echo json_encode($data);?>';
// var resultsB12='<?php echo json_encode($resultsBatt12);?>';
// console.log(myvar);
console.log(localStorage);

const cardsDogAll = ["puppy1", "puppy2", "puppy3", "puppy4", "puppy5", "puppy6", "puppy7", "puppy8", "puppy9", "puppy10", "puppy11", "puppy12"];
const cardsCatAll = ["kitty1", "kitty2", "kitty3", "kitty4", "kitty5", "kitty6", "kitty7", "kitty8","kitty9", "kitty10", "kitty11", "kitty12", "kitty13", "kitty14"];
const cardsButterflyAll = ["butterfly1", "butterfly2", "butterfly3", "butterfly4", "butterfly5","butterfly6", "butterfly7", "butterfly8", "butterfly9", "butterfly10", 
                    "butterfly11", "butterfly12", "butterfly13", "butterfly14"];
let picturesCollection = [cardsDogAll, cardsCatAll, cardsButterflyAll, cardsCatAll, cardsDogAll, cardsCatAll, cardsButterflyAll, cardsDogAll, cardsCatAll];
const cardBackAll = ["hidden1", "hidden2", "hidden3", "hidden4", "hidden5", "hidden6", "hidden7", "hidden8", "hidden9", "hidden10"];
const hiddenCardBack = cardBackAll[Math.floor(Math.random() * cardBackAll.length)];
const container = document.getElementById("container");
let levelsPlayer = 18;
let cardsGame = [];
const startTimeGame = new Date().getTime();
let activeCard = "";
let activePairCards = [];
let resultGame = 0;
let cardsPlayer = [];
if (localStorage.animal === "cardsCatAll") cardsPlayer = cardsCatAll;
if (localStorage.animal === "cardsDogAll") cardsPlayer = cardsDogAll;
if (localStorage.animal === "cardsButterflyAll") cardsPlayer = cardsButterflyAll;

container.classList.remove("level12");
container.classList.remove("level18");
container.classList.remove("level24");
if (localStorage.level === "12") {
    levelsPlayer = 12;
    container.classList.add("level12");
}
if (localStorage.level === "18") {
    levelsPlayer = 18;
    container.classList.add("level18");
}
if (localStorage.level === "24") {
    levelsPlayer = 24;
    container.classList.add("level24");
}
for (let i = 0; i < levelsPlayer; i++) {
    var newDiv = document.createElement("div");
    container.appendChild(newDiv);
}

function randomCards(cardsPlayer){
    for (var step = 0; step < levelsPlayer / 2; step++) {
        var index = Math.floor(Math.random() * cardsPlayer.length);
        cardsGame.push(cardsPlayer[index]);
        cardsGame.push(cardsPlayer[index]);
        cardsPlayer.splice(index, 1);
    }
}

randomCards(cardsPlayer);

const pairsGame = cardsGame.length / 2;

let cards = document.querySelectorAll("#container>div");
cards = [...cards];

const clickCard = function(){
    activeCard = this;
    if (this == activePairCards[0]) return;
    activeCard.classList.remove(hiddenCardBack);
    if (activePairCards.length === 0) {
        activePairCards[0] = activeCard;
        return;
    } else {
        cards.forEach(card => {
            card.removeEventListener("click", clickCard);
        })
        activePairCards[1] = activeCard;
        setTimeout(function(){
            if (activePairCards[0].className === activePairCards[1].className) {
                // Wygrana
                activePairCards.forEach(activeCard => {
                    activeCard.classList.add("success");
                })
                resultGame++;
                cards = cards.filter(card => !card.classList.contains("success"));
                if (resultGame == pairsGame) {
                    const endTimeGame = new Date().getTime();
                    const timeGame = (endTimeGame - startTimeGame) / 1000;
                    console.log(`Wygrane w ${timeGame}s`);
                    document.getElementById("contentInfo").innerHTML = 
                    `<h3>Brawo !!! Twój wynik to ${timeGame}s.</h3>
                    <h3> Jesteś w TOP10.</h3>`;
                    location.href = "#infoWynik";
                }
            } else {
                //  Przegrana
                activePairCards.forEach(activeCard => {
                    activeCard.classList.add(hiddenCardBack);
                })
            }
            activeCard = "";
            activePairCards = [];
            cards.forEach(card => {
                card.addEventListener("click", clickCard);
            })
        }, 400);
    }

};

function reset(){
    localStorage.setItem("amnimal", "");
    localStorage.setItem("level", "");
    location.href = "index.html";
}

const init = function() {
    cards.forEach(function(card){
        const position = Math.floor(Math.random() * cardsGame.length);
        card.classList.add(cardsGame[position]);
        cardsGame.splice(position,1);
    });
    setTimeout(function(){
        cards.forEach(card => {
            card.classList.add(hiddenCardBack);
            card.addEventListener("click", clickCard);
        })
    }, 2000);
};


init();