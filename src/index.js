import { fromEvent } from "rxjs";
import WORDS_LIST from './wordsList.json'

/**
 * Captura los elementos de esa clase en el html
 */
const letterRow = document.getElementsByClassName('letter-row');

/**
 * Observable   
 */
const onKeyDown$ = fromEvent(document, "keydown")

/**Posición en x */
let letterX = 0;
let letterY = 0;
let userAnswer = [];

/**Obtener una palabra de la lista aleatoriamente */
const getRandomWord = () => WORDS_LIST[Math.floor(Math.random() * WORDS_LIST.length)];

console.log(getRandomWord())


/**
 * Observador que permite insertar letras
 */
const insertLetter = {
    next: (event) => {
        const preesedKey = event.key.toUpperCase();
        if (preesedKey.length === 1 && preesedKey.match(/[a-z]/i)) {
            let letterBox = Array.from(letterRow)[letterX].children[letterY];
            letterBox.textContent = preesedKey;
            userAnswer.push(preesedKey)
            letterY++;
        }
    }
}

/**
 * Observador encargado de borrar la letra ingresada 
 */
const deleteLetter = {
    next: (event) => {
        const preesedKey = event.key;
        if (preesedKey === 'Backspace') {
            letterY--;
            let letterBox = Array.from(letterRow)[letterX].children[letterY];
            letterBox.textContent = "";
            userAnswer.pop()

        }
    }
}

/**verifica la palabra que ingresa */
const checkWord = {
    next: (event) => {
        if (event.key === 'Enter') {
            console.log(getRandomWord())
            console.log(userAnswer)

        }
    }
}

/**
 * Subscribirme al observable
 */
onKeyDown$.subscribe(insertLetter);

/**
 * Subscrmirme al otro observable
 */
onKeyDown$.subscribe(deleteLetter);

onKeyDown$.subscribe(checkWord);
