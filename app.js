const cardsDogAll = ["puppy1", "puppy2", "puppy3", "puppy4", "puppy5", "puppy6", "puppy7", "puppy8", "puppy9", "puppy10", "puppy11", "puppy12"];
const cardsCatAll = ["kitty1", "kitty2", "kitty3", "kitty4", "kitty5", "kitty6", "kitty7", "kitty8","kitty9", "kitty10", "kitty11", "kitty12", "kitty13", "kitty14"];
const cardsButterfliesAll = ["butterfly1", "butterfly2", "butterfly3", "butterfly4", "butterfly5","butterfly6", "butterfly7", "butterfly8", "butterfly9", "butterfly10", 
                    "butterfly11", "butterfly12", "butterfly13", "butterfly14"];

let cardsGame =[];

const startTimeGame = new Date().getTime();

let activeCard = "";
const activePairCards = [];

const pairsGame = cardsGame.length / 2;
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
randomCards(cardsButterfliesAll);
console.log(cardsGame);

let cards = document.querySelectorAll("div");
cards = [...cards];

const clickCard = function(){
    console.log("kliknąłeś");
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