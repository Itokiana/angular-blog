import { Component } from '@angular/core';
import { Post } from './Post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  posts = []

  constructor(){
    this.posts = [
      new Post("Mon premier post", "Lorem xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxx      xxxxx xxxxxxxxxx xxxx xxxx"),
      new Post("Mon deuxieme post", "Lorem xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxx      xxxxx xxxxxxxxxx xxxx xxxx"),
      new Post("Encore un post", "Lorem xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxx      xxxxx xxxxxxxxxx xxxx xxxx")
    ]
  }

  
}



