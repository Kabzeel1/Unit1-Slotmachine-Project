/*-------------------------------- Constants --------------------------------*/
const characters = ['❤️', '💰', '⚽', '💎', '🤑']
const winningMessage =  `You have won`
const winVoice = new Audio('Win.mp3')
/*-------------------------------- variables--------------------------------*/
let char 
let wins = 0

/*-------------------------------- Cached Element References--------------------------------*/

var button = document.querySelector('.spin')
var  win = document.getElementById('win')
var winnings = document.getElementById('score')

/*----------------------------- Event Listeners -----------------------------*/
button.addEventListener('click', spin)


/*-------------------------------- Functions --------------------------------*/

function getCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}
getRandomNumber();



function spin() {
  
  const num1 = getCharacter();
  const num2 = getCharacter();
  const num3 = getCharacter();

  
slot1.innerHTML = `${num1}`;
  slot2.innerHTML = `${num1}`;
  slot3.innerHTML = `${num3}`;

   if (num1 === num3){
    win.innerHTML = winningMessage  
    winVoice.volume = .10
    winVoice.play()  
} 
 else {
  win.innerHTML = ''
}
  if (num1 == num3){
    wins++
    winnings.innerHTML = ` 💵Won ${wins}K $`
  } else {
    wins - 1
    winnings.innerHTML = ''
  }
}

