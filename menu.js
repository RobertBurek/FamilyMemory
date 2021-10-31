const animalClasses = ["kitty11", "puppy8", "butterfly10"];
const levelClasses = ["elements12", "elements18", "elements24"];
const topResultClasses = ["topResult_1", "topResult_2", "topResult_3"];

let animal1 = document.getElementById("animal1");
let animal2 = document.getElementById("animal2");
let animal3 = document.getElementById("animal3");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let level3 = document.getElementById("level3");
let topResult_1 = document.getElementById("topResult_1");
let topResult_2 = document.getElementById("topResult_2");
let topResult_3 = document.getElementById("topResult_3");
let divCenter = document.getElementById("center");
let divPictures = document.getElementById("pictures");
let divLevels = document.getElementById("levels");
let divTopResults = document.getElementById("topResults");


let listPictures = [animal1, animal2, animal3];
let listLevels = [level1, level2, level3];
let listTopResult = [topResult_1, topResult_2, topResult_3];
 
for (let i = 0; i < listPictures.length; i++) {
    listPictures[i].classList.add(animalClasses[i]);
    listPictures[i].classList.add("viewHover");
}
for (let i = 0; i < listLevels.length; i++) {
    listLevels[i].classList.add(levelClasses[i]);
    listLevels[i].classList.add("display");
    listLevels[i].classList.add("viewHover");
}
for (let i = 0; i < listTopResult.length; i++) {
    listTopResult[i].classList.add(topResultClasses[i]);
    listTopResult[i].classList.add("display");
}

localStorage.clear();
// console.log(localStorage);

function animalChosenPlayer(chosen){
    // console.log(localStorage.animal + " - localStorage.animal - początek animalChosenPlayer");
    listLevels.forEach(level => {
        level.classList.toggle('display');
    });
    divLevels.classList.add('levels');
    listPictures.forEach(picture => {
        picture.classList.toggle('viewHover');
    });
    divCenter.classList.toggle('centerLevel');
    pictures.classList.toggle('width100');
    pictures.classList.toggle('width50');
    const classChosen = chosen.className;
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.remove(animalClasses[i]);
    };
    listTopResult.forEach((topResult)=>{
        topResult.classList.remove("display");
    });
    divTopResults.classList.add('topResult');
    animal2.classList.add(classChosen);
    animal2.classList.add("blackFrame");
    animal1.removeEventListener("click", clickAnimal1);
    animal3.removeEventListener("click",clickAnimal3);
}

function clearAnimalChosenPlayer(chosen){
    // console.log(localStorage.animal + " - localStorage.animal - początek clearAnimalChosenPlayer");
    localStorage.clear();
    animal2.classList.remove("blackFrame");
    const classChosen = chosen.className;
    animal2.classList.remove(classChosen);
    divCenter.classList.remove('centerLevel');
    divPictures.classList.toggle('width50');
    divPictures.classList.toggle('width100');
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.add(animalClasses[i]);
    };
    listLevels.forEach(level => {
        level.classList.toggle('display');
    });
    divLevels.classList.remove('levels');
    listTopResult.forEach((topResult)=>{
        topResult.classList.add("display");
    });
    divTopResults.classList.remove('topResult');
    listPictures.forEach(picture => {
        picture.classList.toggle('viewHover');
    });
    animal1.addEventListener('click', clickAnimal1);
    animal3.addEventListener('click', clickAnimal3);
}

let clickAnimal1 = function(){
    if (!localStorage.animal) {
        animalChosenPlayer(this);
        localStorage.setItem('animal', "cardsCatAll");
    } else {
        clearAnimalChosenPlayer(this);
        localStorage.clear();
    }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

let clickAnimal2 = function(){
    if (!localStorage.animal) {
        animalChosenPlayer(this);
        localStorage.setItem('animal', "cardsDogAll");
    } else {
        clearAnimalChosenPlayer(this);
        localStorage.clear();
    }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

let clickAnimal3 = function(){
    if (!localStorage.animal) {
        animalChosenPlayer(this);
        localStorage.setItem('animal', "cardsButterflyAll");
    } else {
        clearAnimalAnimalChosenPlayer(this);
        localStorage.clear();
    }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

animal1.addEventListener('click', clickAnimal1);
animal2.addEventListener('click', clickAnimal2);
animal3.addEventListener('click', clickAnimal3);

function levelChosenPlayer(chosen){
    // console.log(localStorage.level + " - localStorage.level - początek levelChosenPlayer");

    listLevels.forEach(level => {
        level.classList.toggle("viewHover");
    });
    // divCenter.classList.toggle('centerLevel');
    // pictures.classList.toggle('width100');
    // pictures.classList.toggle('width50');
    const classChosen = chosen.className;
    // for (let i = 0; i < listLevels.length; i++) {
    //     listLevels[i].classList.remove(levelClasses[i]);
    // };
    listTopResult.forEach((topResult)=>{
        if (topResult.className!=chosen) {
            topResult.classList.add("display");
        }
    });
    for (let i = 0; i < listLevels.length; i++) {
        listLevels[i].classList.remove(levelClasses[i]);
        if (listLevels[i]==chosen) { 
            listTopResult[i].classList.remove("display");
            listTopResult[i].classList.add("marginTopResult");
        }
    };
    divTopResults.classList.add('marginTopResult');
    level2.classList.add(classChosen);
    level2.classList.add("blackFrame");
    level1.removeEventListener("click", clickLevel1);
    level3.removeEventListener("click",clickLevel3);
}


let clickLevel1 = function(){
    if (!localStorage.level) {
        levelChosenPlayer(this);
        localStorage.setItem('level', "12");
    } else {
        clearLevelChosenPlayer(this);
        var animalLocalStorage = localStorage.animal;
        localStorage.clear();
        localStorage.setItem('animal', animalLocalStorage);
    }
    // console.log(localStorage.level + " - localStorage.level - po kliknięciu w level1");
    // location.href = "memoryPlay.html";
}

let clickLevel2 = function(){
    if (!localStorage.level) {
        levelChosenPlayer(this);
        localStorage.setItem('level', "18");
    } else {
        clearLevelChosenPlayer(this);
        var animalLocalStorage = localStorage.animal;
        localStorage.clear();
        localStorage.setItem('animal', animalLocalStorage);
    }
    // console.log(localStorage.level + " - localStorage.level - po kliknięciu w level2");
    // location.href = "memoryPlay.html";
}

let clickLevel3 = function(){
    if (!localStorage.level) {
        levelChosenPlayer(this);
        localStorage.setItem('level', "24");
    } else {
        clearLevelChosenPlayer(this);
        var animalLocalStorage = localStorage.animal;
        localStorage.clear();
        localStorage.setItem('animal', animalLocalStorage);
    }
    // console.log(localStorage.level + " - localStorage.level - po kliknięciu w level3");
    // location.href = "memoryPlay.html";
}


level1.addEventListener('click', clickLevel1);
level2.addEventListener('click', clickLevel2);
level3.addEventListener('click', clickLevel3);


function playWithStorage(val1, val2) {
    localStorage.clear();
    localStorage.setItem('klucz1', val1);
    localStorage.setItem('klucz2', val2);
    console.log(localStorage.klucz1);
    console.log(localStorage.klucz2);
    localStorage.removeItem('klucz2');
    console.log(localStorage);
}