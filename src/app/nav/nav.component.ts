import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  arr: any;

  constructor(public service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        (res: any) => this.arr = res,
        (error: Response) => console.log(error),
      );

  }

}
