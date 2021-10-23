let cat = document.getElementById("cat");
let dog = document.getElementById("dog");
let but = document.getElementById("butterfly");
let el12 = document.getElementById("el12");
let el18 = document.getElementById("el18");
let el24 = document.getElementById("el24");
let divCenter = document.getElementById('center');
let pictures = document.getElementById('pictures');
// console.log(cat);
localStorage.clear();
let listLevels = [el12, el18, el24];
let listPictures = [cat, dog, but];


cat.addEventListener('click', function(event){
    // console.log(event.target);
    // el12.style.display='none';
    // el18.style.display='none';
    // el24.style.display='none';
    el12.classList.toggle('display');
    el18.classList.toggle('display');
    el24.classList.toggle('display');
    divCenter.classList.toggle('centerLevel');
    pictures.classList.toggle('width100');
    pictures.classList.toggle('width50');
    // window.pictureChoice = "cardsCatAll";
    // moj = "cardsCatAll";
    localStorage.setItem('animal', "cardsCatAll");
    console.log(localStorage.animal);
    console.log(localStorage);
    // console.log(window.pictureChoice);
    // console.log(moj);
    // location.href = "memoryPlay.html";
});

dog.addEventListener('click', function(event){
    // console.log(event.target);
    // el12.style.display='none';
    // el18.style.display='none';
    // el24.style.display='none';
    el12.classList.toggle('display');
    el18.classList.toggle('display');
    el24.classList.toggle('display');
    divCenter.classList.toggle('centerLevel');
    pictures.classList.toggle('width100');
    pictures.classList.toggle('width50');
    // window.pictureChoice = "cardsCatAll";
    // moj = "cardsCatAll";
    localStorage.setItem('animal', "cardsDogAll");
    console.log(localStorage.animal);
    console.log(localStorage);
    // console.log(window.pictureChoice);
    // console.log(moj);
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