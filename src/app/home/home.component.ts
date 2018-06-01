import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {routerTransition} from '../animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {
  posts: Post;

  constructor(public postservice: PostService) {
  }

  ngOnInit() {
    this.postservice.getPosts()
      .subscribe(res => this.posts = res);
  }

}
