import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post';


@Injectable()
export class PostService {
  readonly URL_POSTS = '/api/posts/';
  readonly URL_POST_BY_ID = '/api/details/';
  result: any;

  constructor(private http: Http) {
  }

  getPosts(): Observable<any> {
    return this.http.get(this.URL_POSTS)
      .map(res => this.result = res.json());
  }

  getPost(id): Observable<any> {
    return this.http.get(this.URL_POST_BY_ID + id)
      .map(res => this.result = res.json());
  }

  insertPost(post: Post) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.URL_POSTS, JSON.stringify(post), options)
      .map(res => this.result = res.json());
  }


}
