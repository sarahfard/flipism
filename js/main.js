const coin = document.querySelector('#coin');
const front = document.querySelector('#front');
const back = document.querySelector('#back');
const heads = document.querySelector('#hCount');
const tails = document.querySelector('#tCount');
const result = document.querySelector('#result');
let hCounter = 0;
let tCounter = 0;
var button = document.getElementById('btn').addEventListener('click', flipCoin);

function flipCoin(){
  coin.setAttribute('class', '');
  const random = Math.random();
  const hOrT = random < 0.5 ? 'head' : 'tail';
  setTimeout(function(){
    if (hOrT==='tail'){
      front.style.backgroundImage = "url('images/tail.jpg')";
      back.style.backgroundImage = "url('images/head.jpg')";
      tCounter++;
      setTimeout(() => {tails.textContent = tCounter;}, 1900); 
    }
    else{
      front.style.backgroundImage = "url('images/head.jpg')";
      back.style.backgroundImage = "url('images/tail.jpg')";
      hCounter++;
      setTimeout(() => {heads.textContent = hCounter;}, 1900); 
    }
    setTimeout(function(){
      if (hCounter > tCounter){
        result.textContent = ': رو';
      }
      else if(hCounter < tCounter){
        result.textContent = ': پشت';
      }
      else{
        result.textContent = ': مساوی';
      }
    }, 1900);
    coin.setAttribute('class', 'animateCoin');
  } , 100);
  
}


