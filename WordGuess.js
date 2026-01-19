const theWord = document.querySelector('.word')
const input = document.getElementById('input')
const button = document.querySelector('.btn')

const word = ['primo', 'gaia', 'prelude', 'chronovoid', 'kuronami']

const randomIndex = Math.floor(Math.random() * word.length)
const selectedWord = word[randomIndex];
console.log(selectedWord)
let updateDisplay = '';
for (let i = 0; i < selectedWord.length; i++) {
    updateDisplay += '_ '
}
theWord.textContent = updateDisplay;

let guessList = []
function renderWord() {
    if (!input.value) {
        alert('Please choose a letter')
    }
    let letter = input.value

    if (guessList.includes(letter)) {
        alert('this letter has been choose')
    }
    guessList.push(letter)
    input.value = ''

    let renderDisplay = '';
    let allLetterGuess = true;
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessList.includes(selectedWord[i])) {
            renderDisplay += selectedWord[i]
        } else {
            renderDisplay += '_ '
            allLetterGuess = false
        }
    }
    theWord.textContent = renderDisplay
    if (allLetterGuess) {
        alert('You win')
    }
}

button.addEventListener('click', renderWord)