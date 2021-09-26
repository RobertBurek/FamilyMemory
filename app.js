const cardsDogAll = ["puppy-1.jpg", "puppy-2.jpg", "puppy-3.jpg", "puppy-4.jpg", "puppy-5.jpg", "puppy-6.jpg", "puppy-7.jpg", "puppy-8.jpg", "puppy-9.jpg",
                     "puppy-10.jpg", "puppy-11.jpg", "puppy-12.jpg"];
let cardsGame =[];

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

randomCards(cardsDogAll);
console.log(cardsGame);

let cards = document.querySelectorAll("div");
cards = [...cards];

// const init = function() {
    cards.forEach(function(card){
        const position = Math.floor(Math.random() * cardsGame.length);
        card.style.backgroundImage = "url(img/dogs/"+cardsGame[position];
        card.style.backgroundSize = "100% 100%";
        cardsGame.splice(position,1);
    }
    );
// }