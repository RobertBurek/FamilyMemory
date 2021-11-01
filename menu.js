const animalClasses = ["kitty11", "puppy8", "butterfly10"];
const levelClasses = ["elements12", "elements18", "elements24"];
const resultLeftClasses = ["result_1_left", "result_2_left", "result_3_left"];
const resultRightClasses = ["result_1_right", "result_2_right", "result_3_right"];

let animal1 = document.getElementById("animal1");
let animal2 = document.getElementById("animal2");
let animal3 = document.getElementById("animal3");
let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let level3 = document.getElementById("level3");
let result_1_left = document.getElementById("result_1_left");
let result_2_left = document.getElementById("result_2_left");
let result_3_left = document.getElementById("result_3_left");
let result_1_right = document.getElementById("result_1_right");
let result_2_right = document.getElementById("result_2_right");
let result_3_right = document.getElementById("result_3_right");
let divCenter = document.getElementById("center");
let divPictures = document.getElementById("pictures");
let divLevels = document.getElementById("levels");
let divResultsRight = document.getElementById("resultsRight");
let divResultsLeft = document.getElementById("resultsLeft");


let listPictures = [animal1, animal2, animal3];
let listLevels = [level1, level2, level3];
let listResultsLeft = [result_1_left, result_2_left, result_3_left];
let listResultsRight = [result_1_right, result_2_right, result_3_right];
 
for (let i = 0; i < listPictures.length; i++) {
    listPictures[i].classList.add(animalClasses[i]);
    listPictures[i].classList.add("viewHover");
}
for (let i = 0; i < listLevels.length; i++) {
    listLevels[i].classList.add(levelClasses[i]);
    listLevels[i].classList.add("display");
    listLevels[i].classList.add("viewHover");
}
for (let i = 0; i < listResultsRight.length; i++) {
    listResultsRight[i].classList.add(resultLeftClasses[i]);
    listResultsRight[i].classList.add("display");
}

for (let i = 0; i < listResultsLeft.length; i++) {
    listResultsLeft[i].classList.add(resultLeftClasses[i]);
    listResultsLeft[i].classList.add("display");
}

localStorage.clear();
// console.log(localStorage);

function animalChosenPlayer(chosen){
    // console.log(localStorage.animal + " - localStorage.animal - początek animalChosenPlayer");
    listLevels.forEach(level => {
        level.classList.remove("display");
    });
    divLevels.classList.add("width3Elements");
    divLevels.classList.add("borderLeft");
    listPictures.forEach(picture => {
        picture.classList.remove("viewHover");
    });
    divCenter.classList.add("widthCenter3Elements");
    pictures.classList.remove("widht1Element");
    pictures.classList.add("width3Elements");
    const classChosen = chosen.className;
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.remove(animalClasses[i]);
    };
    if (localStorage.level) {
        listResultsRight.forEach((result)=>{
            if (result.className.replace("marginResult")) {
                result.classList.remove("display");
                console.log(result.className.replace("marginResult"));
            }
        })
        divCenter.classList.remove("widthCenter3Elements");
        divCenter.classList.add("width2Elements");
        divResultsRight.classList.remove("width3Elements");
        divResultsRight.classList.remove("borderLeft");
        divResultsRight.classList.remove("marginResult");
        divPictures.classList.remove("width3Elements");
        divPictures.classList.add("width2Elements");
        divLevels.classList.remove("width3Elements");
        divLevels.classList.add("width2Elements");
    } else {
        listResultsRight.forEach((result)=>{
            result.classList.remove("display");
        });
        divResultsRight.classList.add("width3Elements");
        divResultsRight.classList.add("borderLeft");
    }

    animal2.classList.add(classChosen);
    animal2.classList.add("blackFrame");
    animal1.removeEventListener("click", clickAnimal1);
    animal3.removeEventListener("click",clickAnimal3);
    setTimeout(function(){
        if (localStorage.animal && localStorage.level) {
        localStorage.setItem('run',"animalChosenPlayer()");
        // console.log("jestem w animalChosenPlayer()");
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
    listResultsRight.forEach((result)=>{
        result.classList.add("display");
    });
    // divResultsRight.classList.remove('resultsRight');
    if (!localStorage.level) {
        divResultsRight.classList.remove("resultsRight");
        divResultsRight.classList.remove("width3Elements");
        divResultsRight.classList.remove("borderLeft");
        divCenter.classList.remove("widthCenter3Elements");
        divCenter.classList.add("width2Elements");
        divPictures.classList.remove("width3Elements");
        divPictures.classList.add("width2Elements");
        divLevels.classList.remove("borderLeft");
        divLevels.classList.remove("width3Elements");
        divLevels.classList.add("width2Elements");
    } else {
        divCenter.classList.remove("widthCenter3Elements");
        divCenter.classList.add("width2Elements");
        divResultsRight.classList.remove("width3Elements");
        divResultsRight.classList.remove("borderLeft");
        divResultsRight.classList.remove("marginResult");
        divPictures.classList.remove("width3Elements");
        divPictures.classList.add("width2Elements");
        divLevels.classList.remove("width3Elements");
        divLevels.classList.add("width2Elements");
    }
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
    listResultsRight.forEach((result)=>{
        if (result.className!=chosen) {
            result.classList.add("display");
        }
    });
    for (let i = 0; i < listLevels.length; i++) {
        listLevels[i].classList.remove(levelClasses[i]);
        if (listLevels[i]==chosen) { 
            listResultsRight[i].classList.remove("display");
            listResultsRight[i].classList.add("marginResult");
        }
    };
    divResultsRight.classList.add('marginResult');

    level2.classList.add(classChosen);
    level2.classList.add("blackFrame");
    // level2.classList.add("game");
    level1.removeEventListener("click", clickLevel1);
    level3.removeEventListener("click",clickLevel3);
    setTimeout(function(){
        if (localStorage.animal && localStorage.level) {
        localStorage.setItem('run',"levelChosenPlayer()");
        // console.log("jestem w levelChosenPlayer()");
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