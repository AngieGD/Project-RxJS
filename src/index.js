import { fromEvent } from 'rxjs'

/**
 * Crear el observable
 */

const onMouseMove$ = fromEvent(document, 
    "mousemove");

/**
 * Crear el observador
 */
const observadorMouse = {
    next: (event) => {},
}

/**
 * Subscribirse 
 */
onMouseMove$.subscribe(observadorMouse);