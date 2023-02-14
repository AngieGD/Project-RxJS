import { from, of } from "rxjs";


const fruits$ = from(['Apple', 'banana', 'pear'])

fruits$.subscribe(console.log)

const fruitsOf$ = of('Apple', 'tangerine', 'pear')

fruitsOf$.subscribe(console.log)