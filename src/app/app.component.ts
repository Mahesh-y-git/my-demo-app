import { Component, ViewEncapsulation } from '@angular/core';
import { HeroComponent, } from './hero/hero.component';
import { UserComponent } from './user/user.component';
import {DialogContentExampleDialogComponent} from './dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent,UserComponent,DialogContentExampleDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //here emulated is deafult other types aree shadowdown and none
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  count =0 ;
  title = 'my-demo-app';
  addItem(countEvent: any)
  {
    this.count = countEvent;
  }
  
}
