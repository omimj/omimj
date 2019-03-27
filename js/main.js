// When the user scrolls the page, execute myFunction 
window.onscroll = () => {scroll()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Variables
var menuStack = document.querySelector('#mStack');
var navPhone = document.querySelector('#navPhone');
//Event Listeners
menuStack.addEventListener('click', openNav);
navPhone.addEventListener('click', (e) =>{
  navPhone.style.display = "none";
});
//Open Navbar
function openNav(){
    navPhone.style.display = "grid";
}
