const animalClasses = ["kitty11", "puppy8", "butterfly10"];
const levelClasses = ["elements12", "elements18", "elements24"];

let animal1 = document.getElementById("animal1");
let animal2 = document.getElementById("animal2");
let animal3 = document.getElementById("animal3");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let level3 = document.getElementById("level3");
let divCenter = document.getElementById("center");
let pictures = document.getElementById("pictures");


let listPictures = [animal1, animal2, animal3];
let listLevels = [level1, level2, level3];

for (let i = 0; i < listPictures.length; i++) {
    listPictures[i].classList.add(animalClasses[i]);
    listPictures[i].classList.add("viewHover");
}

for (let i = 0; i < listLevels.length; i++) {
    listLevels[i].classList.add(levelClasses[i]);
    listLevels[i].classList.add("display");
    listLevels[i].classList.add("viewHover");
}

localStorage.clear();
// console.log(localStorage);

function chosenPlayer(chosen){
    // console.log(localStorage.animal + " - localStorage.animal - początek chosenPlayer");
    listLevels.forEach(level => {
        level.classList.toggle('display');
    })
    listPictures.forEach(picture => {
        picture.classList.toggle('viewHover');
    })
    divCenter.classList.toggle('centerLevel');
    pictures.classList.toggle('width100');
    pictures.classList.toggle('width50');
    const classChosen = chosen.className;
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.remove(animalClasses[i]);
    }
    animal2.classList.add(classChosen);
    animal2.classList.add("blackFrame");
    animal1.removeEventListener("click", clickAnimal1);
    animal3.removeEventListener("click",clickAnimal3);
}

function clearChosenPlayer(chosen){
    // console.log(localStorage.animal + " - localStorage.animal - początek clearChosenPlayer");
    localStorage.clear();
    animal2.classList.remove("blackFrame");
    const classChosen = chosen.className;
    animal2.classList.remove(classChosen);
    divCenter.classList.remove('centerLevel');
    pictures.classList.toggle('width50');
    pictures.classList.toggle('width100');
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.add(animalClasses[i]);
    }
    listLevels.forEach(level => {
        level.classList.toggle('display');
    })
    listPictures.forEach(picture => {
        picture.classList.toggle('viewHover');
    })
    animal1.addEventListener('click', clickAnimal1);
    animal3.addEventListener('click', clickAnimal3);
}

let clickAnimal1 = function(){
    if (!localStorage.animal) {
        chosenPlayer(this);
        localStorage.setItem('animal', "cardsCatAll");
    } else {
        clearChosenPlayer(this);
        localStorage.clear();
    }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

let clickAnimal2 = function(){
    if (!localStorage.animal) {
        chosenPlayer(this);
        localStorage.setItem('animal', "cardsDogAll");
    } else {
        clearChosenPlayer(this);
        localStorage.clear();
    }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

let clickAnimal3 = function(){
    if (!localStorage.animal) {
        chosenPlayer(this);
        localStorage.setItem('animal', "cardsButterflyAll");
    } else {
        clearChosenPlayer(this);
        localStorage.clear();
    }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

animal1.addEventListener('click', clickAnimal1);
animal2.addEventListener('click', clickAnimal2);
animal3.addEventListener('click', clickAnimal3);


level1.addEventListener('click', function(){
    console.log(localStorage.animal);
})

function playWithStorage(val1, val2) {
    localStorage.clear();
    localStorage.setItem('klucz1', val1);
    localStorage.setItem('klucz2', val2);
    console.log(localStorage.klucz1);
    console.log(localStorage.klucz2);
    localStorage.removeItem('klucz2');
    console.log(localStorage);
}