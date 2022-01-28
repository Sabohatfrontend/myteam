// const elbutton = document.querySelector('.button-add');
// elbutton.addEventListener('click', function(){
// elbutton.classList.toggle('button-add-active');
// console.log("ishladi");
// });

let elbtn = new Array;
let elcontent = new Array;
let elmeet = new Array;
elcontent = document.querySelectorAll('.directors-item-content');
elmeet = document.querySelectorAll('.directors-item-meet');
elbtn = document.querySelectorAll('.button-add');

elbtn.forEach((element, index) => {
  element.addEventListener('click', function(){
    element.classList.toggle('button-add-active');
    elmeet[index].classList.toggle('visually-hidden');
    elcontent[index].classList.toggle('visually-hidden');
  }
  )
});