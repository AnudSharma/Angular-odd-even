import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() startEvent=new EventEmitter<number>();
theCounter=0;
theInterval;
  constructor() { }

  ngOnInit(): void {
  }

  start(){

this.theInterval=setInterval(()=>{
  this.theCounter++;
    this.startEvent.emit(this.theCounter)
},1000)
  }

  stop(){
    console.log("stopped")
    clearInterval(this.theInterval);
  }

}
