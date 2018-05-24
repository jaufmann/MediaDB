import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(value) {
    const username = value.name;
    return this.http.get('http://localhost:8080/api/user?name=' + username);
  }

}
