import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Number2Service {

  constructor() { }

  translateArray(inputArray: number[]): number[]{
    let answer: number[] = inputArray.sort(function(a: number, b:number){
      if(a > b) return 1;
      if(a < b) return -1;
      return  0;
    })
    return answer
  }
}
