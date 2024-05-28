import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.signUpForm = this.getForm();
  }

  submit(): void {
    if (!this.signUpForm.valid) {
      alert('Invalid Form Data');
      return;
    }

    this.authService.signUp(this.signUpForm).subscribe({
      next: res => {

        if (res) {
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 500);
        }
      },
      error: () => alert('Invalid Credentials!!')
    });
  }

  private getForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
}
