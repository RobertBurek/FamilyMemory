console.log(localStorage.animal, " - ", localStorage.level);


const cardsDogAll = ["puppy1", "puppy2", "puppy3", "puppy4", "puppy5", "puppy6", "puppy7", "puppy8", "puppy9", "puppy10", "puppy11", "puppy12"];
const cardsCatAll = ["kitty1", "kitty2", "kitty3", "kitty4", "kitty5", "kitty6", "kitty7", "kitty8","kitty9", "kitty10", "kitty11", "kitty12", "kitty13", "kitty14"];
const cardsButterfliesAll = ["butterfly1", "butterfly2", "butterfly3", "butterfly4", "butterfly5","butterfly6", "butterfly7", "butterfly8", "butterfly9", "butterfly10", 
                    "butterfly11", "butterfly12", "butterfly13", "butterfly14"];
let picturesCollection = [cardsDogAll, cardsCatAll, cardsButterfliesAll, cardsCatAll, cardsDogAll, cardsCatAll, cardsButterfliesAll, cardsDogAll, cardsCatAll];
const cardBackAll = ["hidden1", "hidden2", "hidden3", "hidden4", "hidden5", "hidden6", "hidden7", "hidden8", "hidden9", "hidden10"];
const hiddenCardBack = cardBackAll[Math.floor(Math.random() * cardBackAll.length)];

let cardsGame = [];

const startTimeGame = new Date().getTime();

let activeCard = "";
let activePairCards = [];

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
const some = Math.floor(Math.random() * picturesCollection.length);
randomCards(picturesCollection[some]);
console.log(cardsGame);
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
        // console.log(activePairCards);
        setTimeout(function(){
            if (activePairCards[0].className === activePairCards[1].className) {
                // console.log("wygrana");
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
                    // setTimeout(function(){
                    //     location.reload()
                    // },3000);
                }
            } else {
                // console.log("przegrana");
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
    location.href = "#";
    location.reload();
}

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
            card.classList.add(hiddenCardBack);
            card.addEventListener("click", clickCard);
        })
    }, 2000);
};

// console.log(cards);

init();