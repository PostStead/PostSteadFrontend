import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input()
  user: User = new User();

  phases: string[] = ['../../assets/img/phase1.png', '../../assets/img/phase2.png', '../../assets/img/phase3.png', '../../assets/img/phase4.png']
  passwordComplexityPhase: number = 0;
  hideShowPassword: string = 'password';
  passwordsMatch: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  changeHideShowPassword() {
    if (this.hideShowPassword == 'password') {
      this.hideShowPassword = 'text';
    } else {
      this.hideShowPassword = 'password';
    }
  }

  checkPasswordComplexity() {
    if (this.user.password === this.user.confirmPassword) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }

    if (this.user.password.length < 4) {
      this.passwordComplexityPhase = 3;
      return;
    }

    if (this.user.password.length < 6) {
      this.passwordComplexityPhase = 2;
      return;
    }

    if (this.user.password.length < 8) {
      this.passwordComplexityPhase = 1;
      return;
    }

    this.passwordComplexityPhase = 0;
  }

  checkPasswordsMatch() {
    if (this.user.password === this.user.confirmPassword) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }
  }

  register() {
    console.log("register");
    console.log(this.user);
  }

}
