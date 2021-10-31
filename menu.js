const animalClasses = ["kitty11", "puppy8", "butterfly10"];
const levelClasses = ["elements12", "elements18", "elements24"];
const resultClasses = ["result_1", "result_2", "result_3"];

let animal1 = document.getElementById("animal1");
let animal2 = document.getElementById("animal2");
let animal3 = document.getElementById("animal3");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let level3 = document.getElementById("level3");
let result_1 = document.getElementById("result_1");
let result_2 = document.getElementById("result_2");
let result_3 = document.getElementById("result_3");
let divCenter = document.getElementById("center");
let divPictures = document.getElementById("pictures");
let divLevels = document.getElementById("levels");
let divResults = document.getElementById("results");


let listPictures = [animal1, animal2, animal3];
let listLevels = [level1, level2, level3];
let listResults = [result_1, result_2, result_3];
 
for (let i = 0; i < listPictures.length; i++) {
    listPictures[i].classList.add(animalClasses[i]);
    listPictures[i].classList.add("viewHover");
}
for (let i = 0; i < listLevels.length; i++) {
    listLevels[i].classList.add(levelClasses[i]);
    listLevels[i].classList.add("display");
    listLevels[i].classList.add("viewHover");
}
for (let i = 0; i < listResults.length; i++) {
    listResults[i].classList.add(resultClasses[i]);
    listResults[i].classList.add("display");
}

localStorage.clear();
// console.log(localStorage);

function animalChosenPlayer(chosen){
    // console.log(localStorage.animal + " - localStorage.animal - początek animalChosenPlayer");
    listLevels.forEach(level => {
        level.classList.remove('display');
    });
    divLevels.classList.add('levelsPicturesResults');
    listPictures.forEach(picture => {
        picture.classList.remove('viewHover');
    });
    divCenter.classList.add('centerLevelsResults');
    pictures.classList.remove('pictures');
    pictures.classList.add('picturesLevelsResults');
    const classChosen = chosen.className;
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.remove(animalClasses[i]);
    };
    listResults.forEach((result)=>{
        result.classList.remove("display");
    });
    divResults.classList.add('results');
    animal2.classList.add(classChosen);
    animal2.classList.add("blackFrame");
    animal1.removeEventListener("click", clickAnimal1);
    animal3.removeEventListener("click",clickAnimal3);
    setTimeout(function(){
        if (localStorage.animal && localStorage.level) {
        localStorage.setItem('run',"animalChosenPlayer()");
        console.log("jestem w animalChosenPlayer()");
        // location.href = "memoryPlay.html";
        }
    },3000);
}

function clearAnimalChosenPlayer(chosen){
    // console.log(localStorage.animal + " - localStorage.animal - początek clearAnimalChosenPlayer");
    // localStorage.clear();
    animal2.classList.remove("blackFrame");
    const classChosen = chosen.className;
    animal2.classList.remove(classChosen); // nie ma żadnych klasCSS na wszystkich animals
    // divCenter.classList.remove('centerLevel');
    // divPictures.classList.toggle('width50');
    // divPictures.classList.toggle('width100');
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.add(animalClasses[i]);
    };
    // listLevels.forEach(level => {
    //     level.classList.toggle('display');
    // });
    // divLevels.classList.remove('levels');
    listResults.forEach((result)=>{
        result.classList.add("display");
    });
    divResults.classList.remove('result');
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
    } 
    // else {
        // localStorage.clear('animal');
        // clearAnimalChosenPlayer(this);
        // localStorage.clear();
    // }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

let clickAnimal2 = function(){
    if (!localStorage.animal) {
        animalChosenPlayer(this);
        localStorage.setItem('animal', "cardsDogAll");
    } else {
        localStorage.setItem('animal', "");
        clearAnimalChosenPlayer(this);
        // localStorage.clear();
    }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

let clickAnimal3 = function(){
    if (!localStorage.animal) {
        animalChosenPlayer(this);
        localStorage.setItem('animal', "cardsButterflyAll");
    } 
    // else {
        // clearAnimalAnimalChosenPlayer(this);
        // localStorage.clear();
    // }
    // console.log(localStorage.animal + " - localStorage.animal - po kliknięciu");
    // location.href = "memoryPlay.html";
}

animal1.addEventListener('click', clickAnimal1);
animal2.addEventListener('click', clickAnimal2);
animal3.addEventListener('click', clickAnimal3);




function levelChosenPlayer(chosen){
    // console.log(localStorage.level + " - localStorage.level - początek levelChosenPlayer");

    listLevels.forEach(level => {
        level.classList.remove("viewHover");
    });
    // divCenter.classList.toggle('centerLevel');
    // pictures.classList.toggle('width100');
    // pictures.classList.toggle('width50');
    const classChosen = chosen.className;
    // for (let i = 0; i < listLevels.length; i++) {
    //     listLevels[i].classList.remove(levelClasses[i]);
    // };
    listResults.forEach((result)=>{
        if (result.className!=chosen) {
            result.classList.add("display");
        }
    });
    for (let i = 0; i < listLevels.length; i++) {
        listLevels[i].classList.remove(levelClasses[i]);
        if (listLevels[i]==chosen) { 
            listResults[i].classList.remove("display");
            listResults[i].classList.add("marginResult");
        }
    };
    divResults.classList.add('marginResult');
    level2.classList.add(classChosen);
    level2.classList.add("blackFrame");
    // level2.classList.add("game");
    level1.removeEventListener("click", clickLevel1);
    level3.removeEventListener("click",clickLevel3);
    setTimeout(function(){
        if (localStorage.animal && localStorage.level) {
        localStorage.setItem('run',"levelChosenPlayer()");
        console.log("jestem w levelChosenPlayer()");
        // location.href = "memoryPlay.html";
        }
    },3000);
}


let clickLevel1 = function(){
    if (!localStorage.level) {
        levelChosenPlayer(this);
        localStorage.setItem('level', "12");
    } 
    // else {
        // clearLevelChosenPlayer(this);
        // var animalLocalStorage = localStorage.animal;
        // localStorage.clear();
        // localStorage.setItem('animal', animalLocalStorage);
    // }
    // console.log(localStorage.level + " - localStorage.level - po kliknięciu w level1");
    // location.href = "memoryPlay.html";
}

let clickLevel2 = function(){
    if (!localStorage.level) {
        levelChosenPlayer(this);
        localStorage.setItem('level', "18");
    } else {
        localStorage.setItem('level', "");
        clearLevelChosenPlayer(this);
        // var animalLocalStorage = localStorage.animal;
        // localStorage.setItem('animal', animalLocalStorage);
    }
    // console.log(localStorage.level + " - localStorage.level - po kliknięciu w level2");
    // location.href = "memoryPlay.html";
}

let clickLevel3 = function(){
    if (!localStorage.level) {
        levelChosenPlayer(this);
        localStorage.setItem('level', "24");
    } 
    // else {
        // clearLevelChosenPlayer(this);
        // var animalLocalStorage = localStorage.animal;
        // localStorage.clear();
        // localStorage.setItem('animal', animalLocalStorage);
    // }
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