import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'games-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public userForm?: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {
    this.createNewForm();
  }
  public createNewForm() {
    this.userForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  public login() {
    const userRequest = this.userService.loginUser(this.userForm?.value);
    userRequest.subscribe(() => {
      this.authService.login();
      this.userForm?.reset();
      this.router.navigate(['account']);
    });
  }
}
