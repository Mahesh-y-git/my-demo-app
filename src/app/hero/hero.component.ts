import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 
  userInput ="ddddd";
  Islogged =false;
  fruits = [{id :0,name:'Apple'},{id:1,name:'Banana'} , {id:2,name:'Orange'}];
  animals = ['dog','cat','elephant','lion'];
  imageURL ='https://www.gstatic.com/webp/gallery3/1.png';

  greet(){
    this.userInput="button clicked";
  }
  onMouseOver(){
    this.Islogged =true;
  }
  
}

