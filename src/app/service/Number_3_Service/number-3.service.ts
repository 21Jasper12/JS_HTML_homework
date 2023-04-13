import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Number3Service {

  constructor() { }



  pascalTriangle(layers: number) {
    let triangle_1: any = []
    let triangle_2: any = []
    let triangle_3: any = []
    let triangle_4: any = []
    let triangle_5: any = []


    // 小題一
    for (let i = 0; i < layers; i++) {
      triangle_1[i] = []
      for (let j = 0; j < layers; j++) {
        if (j >= (layers - i)) {
          triangle_1[i][j] = 'o'
        }
        else {
          triangle_1[i][j] = '*'
        }
      }
    }


    // 小題二
    for (let i = 0; i < layers; i++) {
      triangle_2[i] = []
      for (let j = 0; j < layers; j++) {
        if (j >= (layers - i)) {
          triangle_2[i][j] = 'o'
        }
        else {
          triangle_2[i][j] = '*'
        }
      }
    }
    triangle_2.reverse()


    // 小題三
    for (let i = 0; i < layers; i++) {
      triangle_3[i] = []
      for (let j = 0; j < layers; j++) {
        if (j >= (layers - i - 1)) {
          triangle_3[i][j] = '*'
        }
        else {
          triangle_3[i][j] = 'o'
        }
      }
    }



    // 小題四
    for (let i = 0; i < layers; i++) {
      triangle_4[i] = []
      for (let j = 0; j < layers; j++) {
        if (j >= (layers - i - 1)) {
          triangle_4[i][j] = '*'
        }
        else {
          triangle_4[i][j] = 'o'
        }
      }
    }
    triangle_4.reverse()


    // 小題五
    if ((layers % 2) === 0) {
      triangle_5 = '請輸入奇數'
    }
    else {
      let halfLayers = Math.floor(layers / 2)
      let downHalf = []

      for (let i = 0; i < layers; i++) {
        triangle_5[i] = []
        for (let j = 0; j < layers; j++) {
          triangle_5[i] = []
        }
      }

      // 左上
      for (let i = 0; i <= halfLayers; i++) {
        for (let j = 0; j <= halfLayers; j++) {
          if (j === (halfLayers - i)) {
            triangle_5[i][j] = '*'
          }
          else {
            triangle_5[i][j] = 'o'
          }
        }
      }

      // 右上
      for (let i = 0; i <= halfLayers; i++) {
        for (let j = halfLayers; j < layers; j++) {
          if (j === (halfLayers + i)) {
            triangle_5[i][j] = '*'
          }
          else {
            triangle_5[i][j] = 'o'
          }
        }
      }

      downHalf = [...triangle_5]
      downHalf.reverse()

      // 轉向貼上
      for (let i = halfLayers; i < layers; i++) {
        for (let j = 0; j < layers; j++) {
          triangle_5[i][j] = downHalf[i][j]
        }
      }
    }

    return { triangle_1, triangle_2, triangle_3, triangle_4, triangle_5 }
  }

  // 將逗號和o替換成空格
  translateArray(triangleArray: any) {
    let testArray = []
    for (let i = 0; i < triangleArray.length; i++) {
      testArray[i] = triangleArray[i].toString().replace(/o/g, ' ').replace(/,/g, ' ')
      // console.log('translate: ', testArray)
    }

    // console.log('FinalTranslate: ', testArray)
    return testArray
  }

}

