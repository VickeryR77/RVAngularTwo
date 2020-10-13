import { Component, EventEmitter, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'RVAngularTwo';
  isHidden = true;

 posts: Post[] = [
   {title:'Its a great day for hay.',thought:'Thanks Wayne.'},
   {title:'Thats barley.',thought:'Get this man a puppers.'},
   {title:'What is life?',thought:'Life, is, mahvelous!'},
   {title:'What is the universe?',thought:'Aint nobody got time for dat'},
   {title:'THIS IS JEOPARDY',thought:'Daily Double..? I will wager 21 bucks.'}
 ];


//Checks for matching title, deletes 
postDelete = function($event) {
    let x: number = 0;

    for(let post of this.posts) {
      if(post.title == $event.title){
        this.posts.splice(x, 1);
      }
      x++;
    }
  }

//Submits
 postSubmit = function($event){
    this.posts.push($event);
 }
}

