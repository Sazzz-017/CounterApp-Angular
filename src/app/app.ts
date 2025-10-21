import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count:number = 0;

  incrementClick(){
    this.count = this.count+1;
  }

  decrementClick(){
    if(this.count>0){
    this.count=this.count-1;
    }
  }

  resetClick(){
    this.count=0;
  }
}
