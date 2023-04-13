import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Number4Service {

  constructor() { }

  testNumber(num: number): boolean {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
