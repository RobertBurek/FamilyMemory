const cardsDogAll = ["dogs/puppy-1.jpg", "dogs/puppy-2.jpg", "dogs/puppy-3.jpg", "dogs/puppy-4.jpg", "dogs/puppy-5.jpg", "dogs/puppy-6.jpg", "dogs/puppy-7.jpg", "dogs/puppy-8.jpg", 
                    "dogs/puppy-9.jpg", "dogs/puppy-10.jpg", "dogs/puppy-11.jpg", "dogs/puppy-12.jpg"];
const cardsCatAll = ["cats/kitty-1.jpg", "cats/kitty-2.jpg", "cats/kitty-3.jpg", "cats/kitty-4.jpg", "cats/kitty-5.jpg", "cats/kitty-6.jpg", "cats/kitty-7.jpg", "cats/kitty-8.jpg",
                    "cats/kitty-9.jpg", "cats/kitty-10.jpg", "cats/kitty-11.jpg", "cats/kitty-12.jpg", "cats/kitty-13.jpg", "cats/kitty-14.jpg"];
const cardsButterfliesAll = ["butterflies/butterfly-1.jpg", "butterflies/butterfly-2.jpg", "butterflies/butterfly-3.jpg", "butterflies/butterfly-4.jpg", "butterflies/butterfly-5.jpg",
                    "butterflies/butterfly-6.jpg", "butterflies/butterfly-7.jpg", "butterflies/butterfly-8.jpg", "butterflies/butterfly-9.jpg", "butterflies/butterfly-10.jpg", 
                    "butterflies/butterfly-11.jpg", "butterflies/butterfly-12.jpg", "butterflies/butterfly-13.jpg", "butterflies/butterfly-14.jpg"];
const cardsStyle = ["foto1", "foto2", "foto3", "foto4", "foto5", "foto6", "foto7", "foto8", "foto9"];
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
// randomCards(cardsButterfliesAll);
// console.log(cardsGame);
randomCards(cardsStyle);
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