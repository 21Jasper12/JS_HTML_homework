import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Number1Service {

  constructor() { }

  nineNineTable(): any {
    let table: any = []
    let translateTable: any = []
    let finalTable: any = []

    // 產生九九乘法表
    for (let i = 1; i < 10; i++) {
      table[i - 1] = []
      for (let j = 1; j < 10; j++) {
        if(
          Math.floor(((i * j) / 10)) === 0
        ){
          table[i - 1][j - 1] = `${i} X ${j} = ${'0' + (i * j).toString()}`
        }
        else{
          table[i - 1][j - 1] = `${i} X ${j} = ${i * j}`
        }
        // console.log(`${i} X ${j} = ${i * j}`)
      }
    }

    // 重新排序
    for (let i = 0; i < 9; i++) {
      translateTable.push([])
      for (let j = 0; j < 9; j++) {
        translateTable[i][j] = table[j][i]
        // console.log(`${i} X ${j} = ${i * j}`)
      }
    }

    // 將逗號換成空格
    for (let i = 0; i < 9; i++) {
      finalTable[i] = translateTable[i].toString().replace(/,/g, '    ')
    }

    // console.log('nineNineTable: ', table)
    // console.log('translateTable: ', translateTable)
    // console.log('finalTable: ', finalTable)

    return finalTable
  }
}
