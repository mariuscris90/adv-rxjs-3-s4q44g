import { Observable,Observer, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

console.clear();
const l = console.log;


// const toUpperCase = 
//   (source: Observable<any>) => {
//     return new Observable((observer) => {
//       return source.subscribe({
//         next(x) {
//           observer.next( x.toUpperCase() )
//         }
//       })
//     }
//   )}

// of('hello')
//   .pipe(toUpperCase)
//   .subscribe(val => l(val))


// const pow = (p = 1) =>
//   (source: Observable<any>) => {
//     return new Observable((observer) => {
//       return source.subscribe({
//         next(val) {
//           observer.next( Math.pow(val, p) )
//         }
//       })
//     }
//   )}

// const pow = (p = 1) => map((val: number) => Math.pow(val, p))

// from([1, 2, 3])
//   .pipe(pow(3))
//   .subscribe(val => l(val))


// const myMap = mapFn => 
//   (source: Observable<any>) => {
//     return new Observable(observer => {
//       return source.subscribe(val => 
//         observer.next(mapFn(val))
//       )
//     })
//   }
    
// from([1, 2, 3])
//   .pipe(myMap(val => val * val))
//   .subscribe(val => l(val))