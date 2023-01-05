import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserService } from "./user.service";

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

  login(username: string, password: string) {
    let result = this.userService.login(username, password);
    if (result.errorCode === 0) {
      this._isLoggedIn$.next(true);
      localStorage.setItem("currentUser", JSON.stringify(result));
    }
    return result;
  }

  logout() {
    localStorage.removeItem("currentUser");
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

  register(username: string, email: string, password: string) {
    return this.userService.register(username, email, password);
  }
}
