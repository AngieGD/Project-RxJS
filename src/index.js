import { fromEvent, Subject } from "rxjs";
import WORDS_LIST from './wordsList.json'

/**
 * Captura los elementos de esa clase en el html
 */
const letterRow = document.getElementsByClassName('letter-row');

/**
 * Observable   
 */
const onKeyDown$ = fromEvent(document, "keydown")

/**
 * Observable subject
 */
const userWinOrLoose$ = new Subject();

/**Posición en x */
let letterX = 0;
let letterY = 0;
let userAnswer = [];

/**Obtener una palabra de la lista aleatoriamente */
const getRandomWord = () => WORDS_LIST[Math.floor(Math.random() * WORDS_LIST.length)];

let rigthtWord = getRandomWord();
console.log(rigthtWord)


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
            if (userAnswer.join("") === rigthtWord) {
                userWinOrLoose$.next()
            }
        }
    }
}

/**
 * Subscribirme al observable
 */
onKeyDown$.subscribe(insertLetter);

/**
 * Subcribirme al otro observable
 */
onKeyDown$.subscribe(deleteLetter);

/**verificar que sea igual la palabra */
onKeyDown$.subscribe(checkWord);

userWinOrLoose$.subscribe(() => {
    console.log('prueba')
    let lettersRowsWinned = Array.from(letterRow)[letterX]
    for (let i = 0; i < 5; i++) {
        lettersRowsWinned.children[i].classList.add('letter-green');
    }
})