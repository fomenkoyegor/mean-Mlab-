import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Array<Post>;
  postForm: FormGroup;

  constructor(
    public postService: PostService,
    public fb: FormBuilder,
    public router: Router
  ) {
    this.postForm = fb.group({
      'title': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ])],
      'url': [null, Validators.compose([
        Validators.required
      ])],
      'description': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150)
      ])]
    });
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(res => this.posts = res);
  }

  addPost(post: Post) {
    this.postService.insertPost(post)
      .subscribe(
        (newPost) => {
          this.posts.push(newPost);
          this.router.navigateByUrl('/');
        }
      );
  }

}
