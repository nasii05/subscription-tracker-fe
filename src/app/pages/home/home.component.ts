import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  createUser(){
    const userData = this.userForm.value;

    this.authService.createUser(userData)
      .subscribe(response => {
        console.log("User created successfully", response)
      }, error => {
        console.log("Error creating user", error)
      })
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.createUser();

      this.userForm.reset();
    } else {
      console.log('Form is not valid');
    }
  }
}
