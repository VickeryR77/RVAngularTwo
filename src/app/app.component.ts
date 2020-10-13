import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RVAngularTwo';
  isHidden = true;

 posts: Post[] = [
   {title:'Its a great day for hay.',thought:'I had a lot of mac and cheese.'},
   {title:'Thats barley.',thought:'But seriously, Oh lord, my belly.'},
   {title:'What is life?',thought:'Too long sometimes.'},
   {title:'What is the universe?',thought:'Aint nobody got time for dat'},
   {title:'THIS IS JEOPARDY',thought:'Daily Double.'}
 ];

postDelete = function($event) {
    let x: number = 0;

    for(let post of this.posts) {
      if(post.thought == $event.thought && post.title == $event.title){
        this.posts.splice(x, 1);
      }
      x++;
    }
  }

 postSubmit = function($event){
    this.posts.push($event);
 }
}

