const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h = document.querySelector('.theme-heading')
const h2 = document.querySelector('.description')
const h12 = document.querySelector('.h12')
const nav = document.querySelector('nav')
const anchor1 = document.querySelector('.a')
const anchor11 = document.querySelector('.a1')
const firstIndex = document.querySelector('.project-index1') 

buttons.forEach( function(button){
    // console.log(button);
    
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            firstIndex.style.color = '#212121'
            h.style.color = '#212121'
            h2.style.color = '#212121'
            h12.style.color = '#212121'        
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            firstIndex.style.color = '#212121'
            h.style.color = 'black'
            h2.style.color = 'black'
            h12.style.color = 'black'
            anchor1.style.color = '#fff'
            anchor11.style.color = '#fff'
            nav.style.backgroundColor = 'black'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            firstIndex.style.color = '#fff'
            h.style.color = '#fff'
            h2.style.color = '#fff'
            h12.style.color = '#fff'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            firstIndex.style.color = '#212121'
            h.style.color = 'black'
            h2.style.color = 'black'
            h12.style.color = 'black'
        }   
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
            firstIndex.style.color = '#fff'
            h.style.color = '#fff'
            h2.style.color = '#fff'
            h12.style.color = '#fff'
        }   
    })
})

// 2nd project js code

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt((document.querySelector('#weight')).value)
    const result = document.querySelector('#result');

    if(height === ''||height<0 ||isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === ''|| weight<0 ||isNaN(weight)){
        result.innerHTML `Please give a weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>BMI Value = ${bmi}</span>`
    }

})

// ***************     3rd project     *****************

const clock = document.querySelector('#clock')
setInterval( function(){
    let currentTime = new Date();
clock.innerHTML = currentTime.toLocaleTimeString()
}, 1000)


// **********       4th Project       **************

let randomNumber = ((parseInt(Math.random()*100)+1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHI = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultPars')

const p = document.createElement('div')
p.className = "newGame"

let prevGuess = [];
let numGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        
        validateGuess(guess);
        
    })
};

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please give the valid number')
    }
    else if(guess < 1){
        alert('Please Enter The Number Grater Then 1 ')
    }
    else if(guess > 100){
        alert('Please Enter The Number Less Then 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you are win the game number is ${randomNumber}`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is Too low')
    }
    else if(guess > randomNumber){
        displayMessage('Number is Too High')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${ guess}, `
    numGuess++;
    remaning.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHI.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    // p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start New Game</h3>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaning.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true; 

    })
}


//  ***********    project 05      *********

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId 
const startChangeingColor = function(){
    if(!intervalId){
    intervalId = setInterval(changebgColor, 1000)
    }
    function changebgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangeingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener
('click', startChangeingColor)

document.querySelector('#stop').addEventListener
('click', stopChangeingColor)

// **********    project 06    ****************

const insert = document.querySelector('.insert')
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `

    <div class="color">
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${ e . code } </td>
  </tr>
</table>
    </div>
    `;
})