import { Component, Input, OnInit } from "@angular/core";
import { UserDto } from "src/app/models/dto/user-dto";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Input()
  user: User = new User();

  hideShowPassword: string = "password";
  error: any;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {}

  changeHideShowPassword() {
    if (this.hideShowPassword == "password") {
      this.hideShowPassword = "text";
    } else {
      this.hideShowPassword = "password";
    }
  }

  login() {
    // console.log(this.user);

    if (!this.user.password || !this.user.username) {
      return;
    }

    let result = this.authService.login(this.user.username, this.user.password);
    console.log(result);
    if (localStorage.getItem("currentUser")) {
      console.log("Login successful");
      window.location.href = "/";
    } else {
      this.error = "Invalid username or password";
    }
    // console.log(result);
    // if (result.errorCode !== 0) {
    //   this.error = result;
    //   console.log(this.error);
    // } else {
    //   console.log("Login successful");
    //   window.location.href = "/";
    // }
  }
}
