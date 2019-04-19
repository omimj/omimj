
//Variables
var menuStack = document.querySelector('#menu');
var navPhone = document.querySelector('#navPhone');
var closeBtn = document.querySelector('#closebtn');
navPhone.style.display = "none";


//Event Listeners
menuStack.addEventListener('click', openNav);

closeBtn.addEventListener('click', closeNav);
//Open Navbar
function openNav(){
    navPhone.style.display = "grid";
}
function closeNav(){
  navPhone.style.display = "none";
}