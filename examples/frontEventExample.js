import { fromEvent } from 'rxjs'

/**
 * fromEvent es un método que permite crear un Observable que recibe eventos 
 * determinados de un elemento del DOM. Por ejemplo a través de fromEvent podemos 
 * interactuar con las coordenadas del cursor a través de toda la pantalla. 
 * Esto a través del evento mousemove y el elemento document.
 */

/**
 * Crear el observable
 */

const onKeyDown$ = fromEvent(document, 
    "keydown");

/**
 * Crear el observador
 */
const observadorMouse = {
    next: (event) => {
        console.log(event)
    },
}

/**
 * Subscribirse 
 */
onKeyDown$.subscribe(observadorMouse);