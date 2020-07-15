import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
thisCounter=[];

  getCounter(event:number){
    console.log("the event"+event)
this.thisCounter.push(event);
  }

  isOdd(x){
    return x & 1;
  }
}
