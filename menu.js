let cat = document.getElementById("cat");
let dog = document.getElementById("dog");
let but = document.getElementById("butterfly");
let el12 = document.getElementById("el12");
let el18 = document.getElementById("el18");
let el24 = document.getElementById("el24");
let divCenter = document.getElementById('center');
let pictures = document.getElementById('pictures');
let playerChoice = [];


cat.addEventListener('click', function(event){
    console.log(event.target);
    // el12.style.display='none';
    // el18.style.display='none';
    // el24.style.display='none';
    el12.classList.toggle('display');
    el18.classList.toggle('display');
    el24.classList.toggle('display');
    divCenter.classList.toggle('centerLevel');
    pictures.classList.toggle('width100');
    pictures.classList.toggle('width50');
    playerChoice[0] = "cardsCatAll";
    location.href = "memoryPlay.html";
});