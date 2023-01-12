import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserService } from "./user.service";
import { UserDto } from "../models/dto/user-dto";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private userService: UserService) {
    if (localStorage.getItem("currentUser")) {
      this._isLoggedIn$.next(true);
    } else {
      this._isLoggedIn$.next(false);
    }
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn$.next(isLoggedIn);
  }

  // this is deprecated
  // implemented in login.component.ts
  login(username: string, password: string) {
    return this.userService.login(username, password).subscribe({
      next: (response) => {
        console.log(response);
        this._isLoggedIn$.next(true);
        localStorage.setItem("currentUser", JSON.stringify(response));
      },
      error: (error) => {
        console.log(error);
        return { errorCode: 500, errorMessage: "Invalid username or password" };
      }
    });
  }

  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserPassword");
    this._isLoggedIn$.next(false);
    window.location.href = "/";
  }

  getCurrentUser() {
    let userJson = localStorage.getItem("currentUser");

    if (!userJson) {
      return null;
    }

    return JSON.parse(userJson);
  }

  getCurrentUserUsername() {
    let user = this.getCurrentUser();
    return user.name;
  }

  getCurrentUserPassword() {
    return localStorage.getItem("currentUserPassword");
  }

  register(username: string, email: string, password: string) {
    return this.userService.register(username, email, password);
  }
}
