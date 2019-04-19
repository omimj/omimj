
//Variables
var menuStack = document.querySelector('#menu');
var navPhone = document.querySelector('#navPhone');
navPhone.style.display = "none";


//Event Listeners
menuStack.addEventListener('click', openNav);
navPhone.addEventListener('click', (e) =>{
  navPhone.style.display = "none";
});
//Open Navbar
function openNav(){
    navPhone.style.display = "grid";
}
