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

  login(username: string, password: string) {
    // let errorCode = 0;
    // let errorMessage = "";
    // let result = this.userService.login(username, password).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this._isLoggedIn$.next(true);
    //     localStorage.setItem("currentUser", JSON.stringify(response));
    //     return response;
    //   },
    //   (error) => {
    //     console.log(error);
    //     errorCode = 500;
    //     errorMessage = "Invalid username or password";
    //     return { errorCode: 500, errorMessage: "Invalid username or password" };
    //   }
    // );
    // return { errorCode: errorCode, errorMessage: errorMessage }

    return this.userService.login(username, password).subscribe({
      next: (response) => {
        let userDto = new UserDto();
        console.log(response);
        this._isLoggedIn$.next(true);
        localStorage.setItem("currentUser", JSON.stringify(response));
        userDto = response;
        return { ...userDto, errorCode: 0, errorMessage: "" };
      },
      error: (error) => {
        console.log(error);
        let userDto = new UserDto();
        return { ...userDto, errorCode: 500, errorMessage: "Invalid username or password" };
      }
    });
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
