import { Observable, Subject } from "rxjs";

/**crear un observable */
const number$ = new Observable(subscriber => {
    subscriber.next(Math.round(Math.random()*100));
});

const numberRandom$ = new Subject();

/**
 * Observador número 1
 */
const observador1 = {
    next: (number) => {
        console.log(number);
    }
}

/**
 * Observador número 2
 */
const observador2 = {
    next: (number) => {
        console.log(number);
    }
}

numberRandom$.subscribe(observador1);
numberRandom$.subscribe(observador2);

/**Se llama el valor despues de que los observadores se hayan subscrito */
numberRandom$.next(Math.round(Math.random()*100))