import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUsers() {
    return [
      {id: 1, username: 'user1', email: 'user1@ps.ro', token: '123'},
      {id: 2, username: 'user2', email: 'user2@ps.ro', token: '456'},
    ];
  }

  public getUserById(id: number) {
    return {id: 1, username: 'user1', email: 'user1@ps.ro', token: '123'};
  }

  public login(username: string, password: string) {
    return { id: 1, username: 'user1', email: 'user1@ps.ro', token: '123', errorCode: 0, errorMessage: '' };
    // return { errorCode: 500, errorMessage: 'Invalid username or password' };
  }
}
