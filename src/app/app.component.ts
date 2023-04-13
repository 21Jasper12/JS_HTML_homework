import { Component } from '@angular/core';
import { Number1Service } from './service/Number_1_Service/number-1.service';
import { Number2Service } from './service/Number_2_Service/number-2.service';
import { Number3Service } from './service/Number_3_Service/number-3.service';
import { Number4Service } from './service/Number_4_Service/number-4.service';
import { Number5Service } from './service/Number_5_Service/number-5.service';
import { sectionFiveOutput, sectionFourOutput, sectionText, sectionThreeOutput, sectionTwoOutput } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Number1Service,
    Number2Service,
    Number3Service,
    Number4Service,
    Number5Service
  ]
})

export class AppComponent {
  constructor(
    private number_1: Number1Service,
    private number_2: Number2Service,
    private number_3: Number3Service,
    private number_4: Number4Service,
    private number_5: Number5Service,
  ) { }

  // 變數命名區
  section_1_Text: sectionText = {
    title: '一、 顯示九九乘法表',
    content: '按下按鈕顯示九九乘法表'
  }

  section_2_Text: sectionText = {
    title: '二、 排序',
    content: '將陣列[4，89，20，15，9，56，35，40]的數字進行排序由小至大印出結果'
  }

  section_3_Text: sectionText = {
    title: '三、 用程式寫出巴斯卡三角形並將結果印出',
    content: '依設定變數顯示n層'
  }
  section_4_Text: sectionText = {
    title: '四、 判斷質數',
    content: '請在空格內輸入數字'
  }
  section_5_Text: sectionText = {
    title: '五、 請將下方遞迴函數以迴圈方式重寫',
    content: '請將費氏函數以迴圈的形式呈現'
  }

  sectionOneOutput: any

  sectionTwoOutput: sectionTwoOutput = {
    input: [4, 89, 20, 15, 9, 56, 35, 40],
    output: []
  }

  sectionThreeOutput: sectionThreeOutput = {
    input: '',
    output1: [],
    output2: [],
    output3: [],
    output4: [],
    output5: []
  }

  sectionFourOutput: sectionFourOutput = {
    input: '',
    output: false,
  }

  sectionFiveOutput: sectionFiveOutput = {
    input: '',
    output1: 0,
    output2: 0
  }

  // Function區
  sectionOneFun() {
    this.sectionOneOutput = this.number_1.nineNineTable()
  }

  sectionTwoFun(inputArray: number[]): void {
    this.sectionTwoOutput.output = this.number_2.translateArray(inputArray)
  }

  sectionThreeFun(textInput: string) {
    const { triangle_1, triangle_2, triangle_3, triangle_4, triangle_5 } = this.number_3.pascalTriangle(Number(textInput))
    this.sectionThreeOutput.output1 = this.number_3.translateArray(triangle_1)
    this.sectionThreeOutput.output2 = this.number_3.translateArray(triangle_2)
    this.sectionThreeOutput.output3 = this.number_3.translateArray(triangle_3)
    this.sectionThreeOutput.output4 = this.number_3.translateArray(triangle_4)
    this.sectionThreeOutput.output5 = this.number_3.translateArray(triangle_5)

    // console.log('test1: ', this.sectionThreeOutput.output5)
  }

  sectionFourFun(textInput: string): void {
    let inputValue: number = Number(textInput)
    this.sectionFourOutput.output = this.number_4.testNumber(inputValue)
  }

  sectionFiveFun(textInput: string): void {
    let inputValue: number = Number(textInput)
    this.sectionFiveOutput.output1 = this.number_5.fibonacci(inputValue)
    this.sectionFiveOutput.output2 = this.number_5.testFunction(inputValue)
  }


}


