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

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  changeHideShowPassword() {
    if (this.hideShowPassword == "password") {
      this.hideShowPassword = "text";
    } else {
      this.hideShowPassword = "password";
    }
  }

  login() {
    if (!this.user.password || !this.user.username) {
      return;
    }

    this.userService.login(this.user.username, this.user.password).subscribe({
      next: (data) => {
        this.authService.setIsLoggedIn(true);
        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("currentUserPassword", this.user.password ?? "");
        this.error = null;
        window.location.href = "/";
      },
      error: (error) => {
        this.error = error;
      },
    });
  }
}
