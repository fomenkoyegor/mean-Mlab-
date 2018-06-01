import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {Router, ActivatedRoute} from '@angular/router';
import {routerTransition} from '../animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class DetailsComponent implements OnInit {
  post: Post;

  constructor(public postService: PostService,
              public router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe(
      (params) => {
        const id = params['id'];
        this.postService.getPost(id)
          .subscribe(res => this.post = res);
      }
    );
  }

}
