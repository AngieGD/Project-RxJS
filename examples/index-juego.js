import { fromEvent } from "rxjs";

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

/**
 * Observador que permite insertar letras
 */
const insertLetter = {
    next: (event) => {
        const preesedKey = event.key.toUpperCase();
        if (preesedKey.length === 1 && preesedKey.match(/[a-z]/i)) {
            let letterBox = Array.from(letterRow)[letterX].children[letterY];
            letterBox.textContent = preesedKey;
            letterY++;
        }
    }
}

const deleteLetter = {
    next: (event) => {
        const preesedKey = event.key;
        if(preesedKey === 'Backspace') {
            letterY--;
            let letterBox = Array.from(letterRow)[letterX].children[letterY];
            letterBox.textContent = "";

        }
        console.log(preesedKey)
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
