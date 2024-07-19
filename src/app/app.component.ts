import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeComponent } from './component/theme/theme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypingFieldComponent } from './component/typing-field/typing-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ThemeComponent,FontAwesomeModule,TypingFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator-demo';

 stringArrayAnswer: string[] = [];
 stringArrayCalculation: string[] = [];



 setCalculation(){
  var y = "";
    this.stringArrayCalculation.forEach((x)=>{
      y += x;
    });

    console.log(eval(y));
    let answ = document.getElementById("answer");
    if(answ != null){

      if(eval(y) == undefined){
        answ.innerText = "0";
      }else{
      answ.innerText = eval(y);
    }
  }
 }

 setSelectingData(){
  let cal = document.getElementById("calculation");
  let a = "";
  this.stringArrayCalculation.forEach((x) =>{
      a+=x;
  })
  if(cal != null){
    cal.innerText = a;
  }
 }


 backSpaceData(){
  this.stringArrayCalculation.pop();
  this.setSelectingData();
 }

  btnAC(){
    this.stringArrayCalculation = [];
    this.setSelectingData();
    this.setCalculation();
  }
  btnRST(){
    this.stringArrayCalculation = [];
    this.setSelectingData();
    this.setCalculation();
  }
  btnPrecentage(){

  }
  btnDevide(){
    this.stringArrayCalculation.push("/");
    this.setSelectingData();
  }
  btn7(){
    this.stringArrayCalculation.push("7");
    this.setSelectingData();
  }
  btn8(){
    this.stringArrayCalculation.push("8");
    this.setSelectingData();
  }
  btn9(){
    this.stringArrayCalculation.push("9");
    this.setSelectingData();
  }
  btnMultiply(){
    this.stringArrayCalculation.push("*");
    this.setSelectingData();
  }
  btn4(){
    this.stringArrayCalculation.push("4");
    this.setSelectingData();
  }
  btn5(){
    this.stringArrayCalculation.push("5");
    this.setSelectingData();
  }
  btn6(){
    this.stringArrayCalculation.push("6");
    this.setSelectingData();
  }
  btnMinus(){
    this.stringArrayCalculation.push("-");
    this.setSelectingData();
  }
  btn1(){
    this.stringArrayCalculation.push("1");
    this.setSelectingData();
  }
  btn2(){
    this.stringArrayCalculation.push("2");
    this.setSelectingData();
  }
  btn3(){
    this.stringArrayCalculation.push("3");
    this.setSelectingData();
  }
  btnPlus(){
    this.stringArrayCalculation.push("+");
    this.setSelectingData();
  }
  btnReturn(){
    this.backSpaceData();
    
  }
  btn0(){
    this.stringArrayCalculation.push("0");
    this.setSelectingData();

  }
  btnFullStop(){
    this.stringArrayCalculation.push(".");
    this.setSelectingData();

  }
  btnEqual(){
      this.setCalculation();
  }

}



