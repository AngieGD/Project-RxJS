import { Observable } from "rxjs";

//crear observable con lo que emite
const observable$ = new Observable(subscriber => {
    subscriber.next(1),
    subscriber.next(10),
    subscriber.complete(), //Aqui se detiene y no muestra lo siguiente 
    subscriber.next(20)
});

//crear observador con los metodos que responde 
const observador = {
    next: () => {value => {
        console.log(value)
    }},
    complete:() => {},
    error:(error) => {}
};
//Para que el observable emita valores al observador se realiza una subscripcion

//Primero se declara al observable
observable$.subscribe(observador);