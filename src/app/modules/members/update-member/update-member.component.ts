import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { user } from '../../../interface/data-type';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrl: './update-member.component.css'
})
export class UpdateMemberComponent implements OnInit{

  updateMessage: string | undefined;
  updateUserForm: FormGroup;

  backIcon = faArrowLeft;
  users: user[] | undefined;
  userData: user | undefined;
  selectedUser: number | undefined;
  selectedUserId: number | undefined;
  selectedUserMessId: number | undefined;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserServiceService,
              private router: Router) {
    this.updateUserForm = this.getForm();
  }

  ngOnInit(): void {
    let mealId = this.route.snapshot.paramMap.get('id');
    mealId &&
      this.userService.getAUser(mealId).subscribe((data) => {
        this.userData = data;

        this.selectedUserId = this.userData.id;
        this.selectedUserMessId = this.userData.mess.id;
      });

    this.loadUsers();
  }

  submit(): void {
    if (!this.updateUserForm.valid) {
      alert('Invalid Form Data');
      return;
    }

    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      const messId = user.messId;
    
    // Modify the JSON format
    const userData = {...this.updateUserForm.value, mess: {id: messId}}
  
    this.userService.updateAUser(userData, this.selectedUserMessId).subscribe(() => {
          this.updateMessage = 'User is Successfully update';

          setTimeout(() => {
            this.router.navigate(['/members']);
          }, 1000);
    });
  }
}


loadUsers() {
  this.userService.getAllUser().subscribe((result) => {
    this.users = result;
  });
}

// // Function to handle selection change
// onUserChange(event: any) {
//   this.selectedUser = event;
// }


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
