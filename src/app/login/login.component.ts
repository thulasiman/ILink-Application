import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showEmailRequired: boolean = false; // Variable to control email error message visibility
  showPasswordRequired: boolean = false; // Variable to control password error message visibility
  showFieldsRequired: boolean = false; // Variable to control all fields error message visibility
 
  constructor(private loginservice: LoginService, private router: Router) {}
 
  register() {
    this.router.navigate(['register']);
  }
 
  onSubmit(form: any): void {
    this.loginservice.loginn(this.email, this.password)
      .subscribe(
        response => {
          // Handle successful login here
          console.log('Login successful');
          // Redirect user or perform other actions
        },
        error => {
          // Handle login error here
          console.error('Login error:', error);
          // Show appropriate error message to the user
        }
      );
    }
  }