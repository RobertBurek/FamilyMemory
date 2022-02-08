localStorage.clear();

let allResults=[];

var j = -1;
for (let i = 0; i < results.length; i++) {
    if (i%23 === 0) {
        j = j + 1;
        allResults[j] = [];
    } else {
        allResults[j].push(results[i]);
    };
};


function htmlResults (results, indexLevel) {
    let listPlaces = [].concat(placesWon);
    var lineHtmlClass = '';
    var arrayHTML = '';
    var timeUnit = '';
    for (let i = 0; i < results.length; i++) {
        if (results[i] == " " || results[i].includes('el.')) timeUnit = ''
            else timeUnit = ' s';
        if (i%2 === 0) {
            lineHtmlClass = '        <div class="linia">';
            for(var z = 0; z < listPlaces.length; z++){
                if ((listPlaces[z][0] == indexLevel) && ( i == listPlaces[z][1] *2)) {
                    lineHtmlClass = '        <div class="linia place-won">';
                    break;
                };
            };
            arrayHTML = arrayHTML +
                lineHtmlClass +
                '             <div class="name">' + results[i + 1] + '</div>' +
                '             <div class="result">' + results[i] + timeUnit +'</div>' +
                '        </div>';
        };
    };
    return arrayHTML;
};

let resultsCat12 = htmlResults(allResults[0], 0);
let resultsCat18 = htmlResults(allResults[1], 1);
let resultsCat24 = htmlResults(allResults[2], 2);
let resultsDog12 = htmlResults(allResults[3], 3);
let resultsDog18 = htmlResults(allResults[4], 4);
let resultsDog24 = htmlResults(allResults[5], 5);
let resultsButterfly12 = htmlResults(allResults[6], 6);
let resultsButterfly18 = htmlResults(allResults[7], 7);
let resultsButterfly24 = htmlResults(allResults[8], 8);
let resultsClear = '';
let resultsPlarey = '';

const animalClasses = ["kitty11", "puppy8", "butterfly10"];
const levelClasses = ["elements12", "elements18", "elements24"];
const resultLeftClasses = ["result_1_left", "result_2_left", "result_3_left"];
const resultRightClasses = ["result_1_right", "result_2_right", "result_3_right"];
let catResults = [resultsCat12, resultsCat18, resultsCat24];
let dogResults = [resultsDog12, resultsDog18, resultsDog24];
let butterflyResults = [resultsButterfly12, resultsButterfly18, resultsButterfly24];
let results12 = [resultsCat12, resultsDog12, resultsButterfly12];
let results18 = [resultsCat18, resultsDog18, resultsButterfly18];
let results24 = [resultsCat24, resultsDog24, resultsButterfly24];

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
    listResultsRight[i].classList.add(resultRightClasses[i]);
    listResultsRight[i].classList.add("display");
}

for (let i = 0; i < listResultsLeft.length; i++) {
    listResultsLeft[i].classList.add(resultLeftClasses[i]);
    listResultsLeft[i].classList.add("display");
}

function reduceFrame() {
    for (let i = 0; i < listLevels.length; i++) {
        if (i != 1) {
        listLevels[i].classList.add("display");
        listResultsRight[i].classList.add("display");
        listPictures[i].classList.add("display");
        listResultsLeft[i].classList.add("display");
        };
    };
}

function showStartButton() {
    if (localStorage.animal && localStorage.level) {
        StartGame.classList.remove("overlayHidden");
        StartGame.classList.add("overlayVisibility");
        switch (localStorage.animal+localStorage.level) {
            case "cardsCatAll12":
                localStorage.setItem("scoredTime", allResults[0][20]);
              break;
            case "cardsCatAll18":
                localStorage.setItem("scoredTime", allResults[1][20]);
              break;
            case "cardsCatAll24":
                localStorage.setItem("scoredTime", allResults[2][20]);
            break;
            case "cardsDogAll12":
                localStorage.setItem("scoredTime", allResults[3][20]);
              break;
            case "cardsDogAll18":
                localStorage.setItem("scoredTime", allResults[4][20]);
              break;
            case "cardsDogAll24":
                localStorage.setItem("scoredTime", allResults[5][20]);
            break;
            case "cardsButterflyAll12":
                localStorage.setItem("scoredTime", allResults[6][20]);
              break;
            case "cardsButterflyAll18":
                localStorage.setItem("scoredTime", allResults[7][20]);
              break;
            case "cardsButterflyAll24":
                localStorage.setItem("scoredTime", allResults[8][20]);
          }
          if (localStorage.scoredTime == " ") localStorage.setItem("scoredTime", 0);
          console.log(localStorage.scoredTime);
    } else {
        StartGame.classList.add("overlayHidden");
        StartGame.classList.remove("overlayVisibility");
    }
}

function animalChosenPlayer(chosen){
    pictures.classList.remove("widht1Element");
    listLevels.forEach(level => {
        level.classList.remove("display");
    });
    levels.classList.remove("width2Elements");
    levels.classList.add("width3Elements");
    center.classList.remove("widthCenter2Elements");
    center.classList.add("widthCenter3Elements");
    listPictures.forEach(picture => {
        picture.classList.remove("viewHover");
    });
    pictures.classList.remove("width2Elements");
    pictures.classList.add("width3Elements");
    const classChosen = chosen.className;
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.remove(animalClasses[i]);
    };
    for (let i = 0; i < listResultsRight.length; i++) {
        if (localStorage.animal === "cardsCatAll")
            listResultsRight[i].innerHTML = catResults[i];
        if (localStorage.animal === "cardsDogAll")
            listResultsRight[i].innerHTML = dogResults[i];
        if (localStorage.animal === "cardsButterflyAll")
            listResultsRight[i].innerHTML = butterflyResults[i];
    };
    if (localStorage.level) {
        listResultsLeft.forEach((result)=>{
            result.innerHTML = resultsClear;
        });
        for (let i = 0; i < listPictures.length; i++) {
            listPictures[i].classList.remove(animalClasses[i]);
            if (listPictures[i] === chosen) {
                if (localStorage.level === "12")
                result_2_left.innerHTML = results12[i];
                if (localStorage.level === "18")
                result_2_left.innerHTML = results18[i];
                if (localStorage.level === "24")
                result_2_left.innerHTML = results24[i];
            };
        };
        reduceFrame();
    } else {
        listResultsRight.forEach((result)=>{
            result.classList.remove("display");
        });
        resultsRight.classList.add("width3Elements");
    };
    animal2.classList.add(classChosen);
    animal2.classList.add("blackFrame");
    animal1.removeEventListener("click", clickAnimal1);
    animal3.removeEventListener("click",clickAnimal3);
    showStartButton();
};


function clearAnimalChosenPlayer(chosen){
    animal2.classList.remove("blackFrame");
    const classChosen = chosen.className;
    animal2.classList.remove(classChosen);
    for (let i = 0; i < listPictures.length; i++) {
        listPictures[i].classList.add(animalClasses[i]);
    };
    // ----Wąskie okno
    listLevels.forEach(level => {
        level.classList.remove('display');
    });
    listPictures.forEach(picture => {
        picture.classList.remove('display');
    });
    // end----Wąskie okno
    listResultsRight.forEach((result)=>{
        result.classList.add("display");
    });
    listPictures.forEach(picture => {
        picture.classList.add('viewHover');
    });
    animal1.addEventListener('click', clickAnimal1);
    animal3.addEventListener('click', clickAnimal3);[]
    resultsRight.classList.remove("width3Elements");
    resultsLeft.classList.remove("width3Elements");
    if (!localStorage.level) {
        center.classList.remove("widthCenter3Elements");
        center.classList.add("widthCenter2Elements");
        pictures.classList.remove("width3Elements");
        pictures.classList.add("width2Elements");
        levels.classList.remove("width3Elements");
        levels.classList.add("width2Elements");
    } else {
        for (let i = 0; i < listResultsLeft.length; i++) {    //do funkcji
            if (localStorage.level === "12")    //do funkcji
            listResultsLeft[i].innerHTML = results12[i];    //do funkcji
            if (localStorage.level === "18")    //do funkcji
            listResultsLeft[i].innerHTML = results18[i];    //do funkcji
            if (localStorage.level === "24")    //do funkcji
            listResultsLeft[i].innerHTML = results24[i];    //do funkcji
        };    //do funkcji
        listResultsLeft.forEach((result)=>{    //do funkcji
            result.classList.remove("display");    //do funkcji
        });    //do funkcji
        resultsLeft.classList.add("width3Elements");
    };
    showStartButton();
};

let clickAnimal1 = function(){
    if (!localStorage.animal) {
        localStorage.setItem('animal', "cardsCatAll");
        animalChosenPlayer(this);
    };
};

let clickAnimal2 = function(){
    if (!localStorage.animal) {
        localStorage.setItem('animal', "cardsDogAll");
        animalChosenPlayer(this);
    } else {
        localStorage.setItem('animal', "");
        clearAnimalChosenPlayer(this);
    };
};

let clickAnimal3 = function(){
    if (!localStorage.animal) {
        localStorage.setItem('animal', "cardsButterflyAll");
        animalChosenPlayer(this);
    };
};

animal1.addEventListener('click', clickAnimal1);
animal2.addEventListener('click', clickAnimal2);
animal3.addEventListener('click', clickAnimal3);

function levelChosenPlayer(chosen){
    levels.classList.add("width3Elements");
    listLevels.forEach(level => {
        level.classList.remove("viewHover");
    });
    const classChosen = chosen.className;
    for (let i = 0; i < listLevels.length; i++) {
        listLevels[i].classList.remove(levelClasses[i]);
    };
    if (localStorage.animal) {
        listResultsRight.forEach((result)=>{
            result.innerHTML = resultsClear;
        });
        for (let i = 0; i < listLevels.length; i++) {
            listLevels[i].classList.remove(levelClasses[i]);
            if (listLevels[i] === chosen) {
                if (localStorage.animal === "cardsCatAll")
                result_2_right.innerHTML = catResults[i];
                if (localStorage.animal === "cardsDogAll")
                result_2_right.innerHTML = dogResults[i];
                if (localStorage.animal === "cardsButterflyAll")
                result_2_right.innerHTML = butterflyResults[i];
            };
        };
        reduceFrame();
    } else {
        resultsLeft.classList.add("width3Elements");
        center.classList.add("widthCenter3Elements");
        center.classList.remove("widthCenter2Elements");
        pictures.classList.add("width3Elements");
        pictures.classList.remove("width2Elements");
        levels.classList.add("width3Elements");
        levels.classList.remove("width2Elements");
        for (let i = 0; i < listResultsLeft.length; i++) {     //do funkcji
            if (localStorage.level === "12")     //do funkcji
            listResultsLeft[i].innerHTML = results12[i];     //do funkcji
            if (localStorage.level === "18")     //do funkcji
            listResultsLeft[i].innerHTML = results18[i];     //do funkcji
            if (localStorage.level === "24")     //do funkcji
            listResultsLeft[i].innerHTML = results24[i];     //do funkcji
        };     //do funkcji
        listResultsLeft.forEach((result)=>{    //do funkcji
            result.classList.remove("display");    //do funkcji
        });    //do funkcji
    };
    level2.classList.add(classChosen);
    level2.classList.add("blackFrame");
    level1.removeEventListener("click", clickLevel1);
    level3.removeEventListener("click",clickLevel3);
    showStartButton();
};


function clearLevelChosenPlayer(chosen){
    level2.classList.remove("blackFrame");
    const classChosen = chosen.className;
    level2.classList.remove(classChosen);
    for (let i = 0; i < listLevels.length; i++) {
        listLevels[i].classList.add(levelClasses[i]);
    };
    // ----Wąskie okno
    listLevels.forEach(level => {
        level.classList.remove('display');
    });
    listPictures.forEach(picture => {
        picture.classList.remove('display');
    });
    // end----Wąskie okno
    listResultsLeft.forEach((result)=>{
        result.classList.add("display");
    });
    listLevels.forEach(level => {
        level.classList.add('viewHover');
    });
    level1.addEventListener('click', clickLevel1);
    level3.addEventListener('click', clickLevel3);
    if (!localStorage.animal) {
        resultsRight.classList.remove("width3Elements");
        center.classList.remove("widthCenter3Elements");
        center.classList.add("widthCenter2Elements");
        pictures.classList.remove("width3Elements");
        pictures.classList.add("width2Elements");
        levels.classList.remove("width3Elements");
        levels.classList.add("width2Elements");
        resultsLeft.classList.remove("width3Elements");
    } else {
        resultsRight.classList.remove("width3Elements");
        resultsLeft.classList.remove("width3Elements");
        for (let i = 0; i < listResultsRight.length; i++) {
            if (localStorage.animal === "cardsCatAll")
            listResultsRight[i].innerHTML = catResults[i];
            if (localStorage.animal === "cardsDogAll")
            listResultsRight[i].innerHTML = dogResults[i];
            if (localStorage.animal === "cardsButterflyAll")
            listResultsRight[i].innerHTML = butterflyResults[i];
        };
        listResultsRight.forEach((result)=>{
            result.classList.remove("display");
        });
        resultsRight.classList.add("width3Elements");
    };
    showStartButton();
};


let clickLevel1 = function(){
    if (!localStorage.level) {
        localStorage.setItem('level', "12");
        levelChosenPlayer(this);
    }
}

let clickLevel2 = function(){
    if (!localStorage.level) {
        localStorage.setItem('level', "18");
        levelChosenPlayer(this);
    } else {
        localStorage.setItem('level', "");
        clearLevelChosenPlayer(this);
    }
}

let clickLevel3 = function(){
    if (!localStorage.level) {
        localStorage.setItem('level', "24");
        levelChosenPlayer(this);
    } 
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