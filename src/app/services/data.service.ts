import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../interfaces/IUser';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const apiUrl = environment.apiUrl;

@Injectable()
 
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>(apiUrl + '/users');
  }

  getUser(userId) {
    return this.http.get(apiUrl + '/users/' + userId);
  }

  getPosts() {
    return this.http.get( apiUrl + '/posts');
  }

  // createUser(user: any) {
  //   return this.http.post(apiUrl + '/users', user);
  // }

  createUser(newUser) {
    return this.http.post(apiUrl + '/users', newUser)
    .map((data) => {
      console.log(data)
    });
  }

  deleteUser(userId) {
    return this.http.delete(apiUrl + '/users/' + userId)
    .map((data) => {
      console.log(data)
    });
  }

  extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  } 
}
