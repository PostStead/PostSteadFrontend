import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
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

  constructor(private userService: UserService) {}

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

    if (!this.user.password || !this.user.email) {
      return;
    }

    let result = this.userService.login(this.user.username, this.user.password);

    if (result.errorCode !== 0) {
      this.error = result;
      console.log(this.error);
    } else {
      console.log("Login successful");
    }
  }
}
