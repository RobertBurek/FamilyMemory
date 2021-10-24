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
console.log(localStorage);

function chosenPlayer(chosen){
    console.log(localStorage.animal + " - localStorage.animal - początek chosenPlayer");
    listLevels.forEach(level => {
        level.classList.toggle('display');
    })
    listPictures.forEach(picture => {
        picture.classList.toggle('viewHover');
    })
    divCenter.classList.toggle('centerLevel');
    pictures.classList.toggle('width100');
    pictures.classList.toggle('width50');
    const classChosen = chosen.target.className;
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.remove(animalClasses[i]);
    }
    animal2.classList.add(classChosen);
    animal2.classList.add("blackFrame");
}

function clearChosenPlayer(chosen){
    console.log(localStorage.animal + " - localStorage.animal - początek clearChosenPlayer");
    localStorage.clear();
    animal2.classList.remove("blackFrame");
    const classChosen = chosen.target.className;
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
}


animal1.addEventListener('click', function(event){
    if (!localStorage.animal) {
        chosenPlayer(event);
        localStorage.setItem('animal', "cardsCatAll");
    } else {
        clearChosenPlayer(event);
        localStorage.clear();
    }
    console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
});

animal2.addEventListener('click', function(event){
    if (!localStorage.animal) {
        chosenPlayer(event);
        localStorage.setItem('animal', "cardsDogAll");
    } else {
        clearChosenPlayer(event);
        localStorage.clear();
    }
    console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
});

animal3.addEventListener('click', function(event){
    if (!localStorage.animal) {
        chosenPlayer(event);
        localStorage.setItem('animal', "cardsButterflyAll");
    } else {
        clearChosenPlayer(event);
        localStorage.clear();
    }
    console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
});

function playWithStorage(val1, val2) {
    localStorage.clear();
    localStorage.setItem('klucz1', val1);
    localStorage.setItem('klucz2', val2);
    console.log(localStorage.klucz1);
    console.log(localStorage.klucz2);
    localStorage.removeItem('klucz2');
    console.log(localStorage);
}