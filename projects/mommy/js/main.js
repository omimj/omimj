//variables
let loader = document.getElementById('wrap');
let startText = document.querySelector('.begin');
let startBtn = document.querySelector('#startBtn');
let text = document.querySelector('#text');
let btnCol = document.querySelector('.btnCol');
let hmText = "HAPPY MOTHER'S DAY";

let clicks = 0;
//event listeners
startBtn.addEventListener('click', () => {
  if(clicks == 0){
    hmDisplay();
  }else if(clicks == 1){
    btnCDisplay();
  }
});

  
setTimeout(() =>{
  loader.style.display = 'none';
  startText.style.display = 'block'
}, 3000);


function hmDisplay() {
  clicks += 1;
  text.innerHTML = "";
  startBtn.style.display = 'none';
  let i = 0;

  setInterval(() => {
    if(i < hmText.length){
      text.innerHTML += hmText[i];
      i++;
    }   
  }, 300);

  setTimeout(() => {
    startBtn.style.display = 'inline';
  }, 5600);
}

function btnCDisplay(){
  startText.style.display = 'none';
  btnCol.style.display = 'block';
}

