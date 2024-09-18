import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incubyte-tdd-assessment';
  sum: number = 0;
  error: any = ''
  constructor(){}

  add(str: string){
    try{
      debugger;
      let numbers = this.extract(str);
      if(numbers && numbers.length > 0){
        this.sum = numbers
          .map(num => num> 1000 ? 0: num)
          .reduce((val,num) => val + num,0);
      }
      console.log(this.sum);
    }catch(error){
      console.log(error);
      this.error = error;
    }
  }

  extract(str: string){
    debugger;
    let numbers = str.match(/-?\d+/g)?.map(Number);
    let negativeNumbers = numbers?.filter(number => number < 0);
    if(negativeNumbers && negativeNumbers.length > 0){
         throw ['Error: Negative numbers detected!', ...negativeNumbers];
    }
     
      return numbers;
  }  
  
}
