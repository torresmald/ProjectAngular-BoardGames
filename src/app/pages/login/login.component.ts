import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'games-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public userForm?: FormGroup;
  public errors?: string = '';
  constructor(
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
    userRequest.subscribe({
      next: () => {
        this.userForm?.reset();
        this.router.navigate(['account']);
      },
      error: (error) => {
        this.errors = error.error;
      },
    });
  }
}
