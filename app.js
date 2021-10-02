const cardsDogAll = ["puppy1", "puppy2", "puppy3", "puppy4", "puppy5", "puppy6", "puppy7", "puppy8", "puppy9", "puppy10", "puppy11", "puppy12"];
const cardsCatAll = ["kitty1", "kitty2", "kitty3", "kitty4", "kitty5", "kitty6", "kitty7", "kitty8","kitty9", "kitty10", "kitty11", "kitty12", "kitty13", "kitty14"];
const cardsButterfliesAll = ["butterfly1", "butterfly2", "butterfly3", "butterfly4", "butterfly5","butterfly6", "butterfly7", "butterfly8", "butterfly9", "butterfly10", 
                    "butterfly11", "butterfly12", "butterfly13", "butterfly14"];
let pictures = [cardsDogAll, cardsCatAll, cardsButterfliesAll, cardsDogAll, cardsCatAll, cardsButterfliesAll, cardsDogAll, cardsCatAll];
let cardsGame =[];

const startTimeGame = new Date().getTime();

let activeCard = "";
const activePairCards = [];

let resultGame = 0;

function randomCards(elments){
    // console.log(elments.length);
    for (var step = 0; step < 9; step++) {
        var index = Math.floor(Math.random() * elments.length);
        cardsGame.push(elments[index]);
        cardsGame.push(elments[index]);
        // console.log(elments[index]);
        elments.splice(index, 1);
    }
    // console.log(elments);
}

// randomCards(cardsDogAll);
// console.log(cardsGame);
// cardsGame =[];
// randomCards(cardsCatAll);
// console.log(cardsGame);
const some = Math.floor(Math.random() * pictures.length);
randomCards(pictures[some]);
console.log(cardsGame);
const pairsGame = cardsGame.length / 2;

let cards = document.querySelectorAll("div");
cards = [...cards];

const clickCard = function(){
    activeCard = this;
    activeCard.classList.remove("hidden");
    if (activePairCards.length === 0) {
        activePairCards[0] = activeCard;
        return;
    } else {
        cards.forEach(card => {
            card.removeEventListener("click", clickCard);
        })
        activePairCards[1] = activeCard;
        // console.log(activePairCards);
        setTimeout(function(){
            if (activePairCards[0].className === activePairCards[1].className) {
                // console.log("wygrana");
                activePairCards.forEach(activeCard => {
                    activeCard.classList.add("success");
                })
                resultGame++;
                if (resultGame == pairsGame) {
                    console.log("wygrane");
                }
            } else {
                // console.log("przegrana");
                activePairCards.forEach(activeCard => {
                    activeCard.classList.add("hidden");
                })
            }
            activeCard = "";
            activePairCards.length = 0; // = [];
            cards.forEach(card => {
                card.addEventListener("click", clickCard);
            })
        }, 600);
    }

};

const init = function() {
    cards.forEach(function(card){
        const position = Math.floor(Math.random() * cardsGame.length);
        // card.style.backgroundImage = "url(img/success-1.png), url(img/" + cardsGame[position] +")";
        // card.style.backgroundImage = "url(img/" + cardsGame[position];
        // card.style.backgroundImage = "url(img/success-2.png)";
        // card.style.backgroundSize = "100% 100%";
        card.classList.add(cardsGame[position]);
        cardsGame.splice(position,1);
    });
    setTimeout(function(){
        cards.forEach(card => {
            card.classList.add("hidden");
            card.addEventListener("click", clickCard);
        })
    }, 2000);
};

console.log(cards);

init();