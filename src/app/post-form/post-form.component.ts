import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { Post } from './post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();
  title :string;
  thought :string;
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  postThought = function(){
    let postThought: Post = {title: this.title, thought: this.thought};
    this.submitted.emit(postThought);
    this.title = "";
    this.thought = "";
  }

  SwitchHidden = function(){
    this.isHidden = !this.isHidden;
  }

}

interface Post {
  title: string,
  thought: string
}