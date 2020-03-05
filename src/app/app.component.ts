import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 displayPassword: boolean = false;
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 
 listTimebuttonClicked = new Array<any>();
 listNumberButtonClicked = [];
 // listTimebuttonClicked = []
 counter = 0;
 

 togglePassword(){
   this.displayPassword = !this.displayPassword;
   // this.listTimebuttonClicked.push(new Date().getTime());
   this.listTimebuttonClicked.push(new Date().getTime());
   this.listNumberButtonClicked.push(this.counter);
   this.counter++;
 }

 updatePoition3to7(){
  this.listNumberButtonClicked[3] = 7;
 }


 getColor(){
  if (this.counter > 7)
    return 'green';
 }


}
