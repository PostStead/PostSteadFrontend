import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // apiUrl = "http://localhost:8081/api";
  apiUrl = "https://poststead.online/api";
  apiProxyConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  constructor(private http: HttpClient) {}

  public getUsers() {
    return [
      {
        id: 1,
        username: "user1",
        email: "user1@ps.ro",
        token: "123",
        errorCode: 0,
        errorMessage: "",
      },
      {
        id: 2,
        username: "user2",
        email: "user2@ps.ro",
        token: "456",
        errorCode: 0,
        errorMessage: "",
      },
    ];
  }

  public getUserById(id: number) {
    let users = this.getUsers();
    let user = users.find((user) => user.id === id);
    if (user) {
      return user;
    }
    return null;
  }

  public getUserByUsername(username: string): Observable<User> {
    console.log(
      "response:",
      this.http.get<User>(`${this.apiUrl}/user/${username}`)
    );
    // return this.http.get<User>(`${this.apiUrl}/users/${username}`);
    return this.http.get<User>(`${this.apiUrl}/users/alex`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  public login(username: string, password: string) {
    // return {
    //   id: 1,
    //   username: "user1",
    //   email: "user1@ps.ro",
    //   token: "123",
    //   errorCode: 0,
    //   errorMessage: "",
    // };
    // return { errorCode: 500, errorMessage: 'Invalid username or password' };
    this.getUserByUsername(username).subscribe((user) => {
      console.log("user:", user);
    });

    return {
      id: 1,
      username: "user1",
      email: "user1@ps.ro",
      token: "123",
      errorCode: 0,
      errorMessage: "",
    };
  }

  public register(
    username: string,
    email: string,
    password: string
  ): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user`, {
      name: username,
      email: email,
      password: password,
    });
  }
}
