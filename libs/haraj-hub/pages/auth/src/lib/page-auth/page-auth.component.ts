import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './../../../../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'hh-page-auth',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatButtonModule,
    MatInputModule, 
    MatInputModule,
    MatIconModule, 
    MatCardModule,
    CommonModule, 
  ],
  templateUrl: './page-auth.component.html',
  styleUrl: './page-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAuthComponent {
  authForm: FormGroup;
  isSignInMode = true;
  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSwitchMode() {
    this.isSignInMode = !this.isSignInMode;
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    this.isLoading = true;

    if (this.isSignInMode) {
      this.authService.signIn(email, password).subscribe(response => {
        this.isLoading = false;
        console.log('Sign In Response:', response);
      });
    } else {
      this.authService.signUp(email, password).subscribe(response => {
        this.isLoading = false;
        console.log('Sign Up Response:', response);
      });
    }
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }
}
