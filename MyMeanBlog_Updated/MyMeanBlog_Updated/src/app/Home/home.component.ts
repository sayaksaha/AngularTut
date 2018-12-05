import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent{
  // name = 'Angular Blog';
   newPost = 'My first entry!';
   enteredVal = '';
    posts = [
      {title:'Action',content:'Get all your action here!'},
{title:'Drama',content:'Its all Drama here..'},
{title:'Horror',content:'Lets get scared..!'}
    ];
  onAdd(){

    this.newPost = this.enteredVal;
  }


}
