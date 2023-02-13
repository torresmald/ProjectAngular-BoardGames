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
  selector: 'games-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public userForm?: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.createNewForm()
  }

  public createNewForm() {
    this.userForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      picture: new FormControl(''),
      age: new FormControl('', [Validators.min(10), Validators.max(90), Validators.required]),
      nickname: new FormControl('', Validators.required),
    });
  }
  public register() {
    if(!this.userForm?.valid){return;}
    const userRequest = this.usersService.createUser(this.userForm?.value);
    userRequest.subscribe(() => {
      this.userForm?.reset();
      this.router.navigate(['login']);
    });
  }
}
