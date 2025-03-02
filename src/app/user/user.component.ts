import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  counter: number = 0;
  
  @Output() incrementCountEvent = new EventEmitter<number>();
  @Input() occupation = '';
  countvalues(){
    this.counter++;
    this.incrementCountEvent.emit(this.counter);
  }

 
}
