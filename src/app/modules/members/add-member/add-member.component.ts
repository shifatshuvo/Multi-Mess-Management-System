import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css',
})
export class AddMemberComponent {
  addMessage: string | undefined;
  addUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.addUserForm = this.getForm();
  }

  submit(): void {
    if (!this.addUserForm.valid) {
      alert('Invalid Form Data');
      return;
    }

    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      const messId = user.messId;

      // Modify the JSON format
      const userData = { ...this.addUserForm.value, mess: { id: messId } };

      this.userService.addAMember(userData).subscribe({
        next: (res) => {
          if (res) {
            this.addMessage = res;
            setTimeout(() => {
              this.router.navigate(['/members']);
            }, 1000);
          }
        },
        error: (err) => {
          this.addMessage = err.error;
        },
      });
    }
  }

  private getForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', Validators.required],
      role: ['', Validators.required],
    });
  }
}
