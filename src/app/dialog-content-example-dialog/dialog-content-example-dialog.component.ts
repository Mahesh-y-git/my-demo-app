import { booleanAttribute, Component, Input, input } from '@angular/core';

@Component({
  // here selector are many types
  // 1. Element selector
  // 2. Attribute selector - now we used this selector 
  // 3. Class selector
  selector: 'app-DialogContentExampleDialogComponent',
  imports: [],
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrl: './dialog-content-example-dialog.component.css'
})
export class DialogContentExampleDialogComponent {
  //tranform will convert the input value as required
  @Input({required:true,transform:changeValue,alias:'dummyname'}) num : number = 0;
//booleanAttribute is a built in transformer that converts the string value to boolean
  @Input({transform:booleanAttribute}) showCounter: boolean = false;

 
}
function changeValue(value: number) {
  return value*1000;
}
