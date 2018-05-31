import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
  readonly URL_POSTS = 'http://localhost:3000/api/posts';
  result: any;

  constructor(private http: Http) {
  }

  getPosts(): Observable<any> {
    return this.http.get(this.URL_POSTS)
      .map(res => this.result = res.json());
  }

}
