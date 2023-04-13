import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Number5Service {

  constructor() { }

  fibonacciRecursively(counter: number, init: number, accumulator: number): number {
    if (counter === 0) {
      return init;
    } else {
      return this.fibonacciRecursively(counter - 1, accumulator, init + accumulator);
    }
  }

  fibonacci(n: number) {
    return this.fibonacciRecursively(n, 0, 1);
  }

  // console.log(fibonacci(2))

  testFunction(n: number): number {
    let init: number = 0;
    let accumulator: number = 1;

    for (let counter = 0; counter < n; counter++) {
      let temp: number = accumulator;
      accumulator += init;

      init = temp;
      // console.log(`第${counter}次, init: ${init}, accumulator: ${accumulator}, temp: ${temp}`)
    }

    return init;
  }

  // console.log(testFunction(2))
}
