import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //Pulls in post from parent
  @Input() post: Post;

  //Emits deleted to parent
  @Output() deleted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  //Deletes
  postDelete = function() {
    this.deleted.emit(this.post)
  }
}

//Import didn't work well. Get clarity??
interface Post {
  title: string,
  thought: string
}