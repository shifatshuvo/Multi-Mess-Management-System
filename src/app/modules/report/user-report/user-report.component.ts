import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user, userId, userReport } from '../../../interface/data-type';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrl: './user-report.component.css',
})
export class UserReportComponent implements OnInit {
  userList: user[] | undefined;
  userReport: userReport | undefined;
  message: string | undefined;
  userData: user | undefined;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.showUserList();

    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      this.userData = user;
    }

    if (this.userData?.role === 'MESSMATE') {
      this.userService
        .getUserReportById(this.userData.id)
        .subscribe((result) => {
          this.userReport = result;
        });
    }
  }

  showUserList() {
    this.userService.getAllUser().subscribe((result) => {
      this.userList = result;
    });
  }

  userSelect(data: { userId: any }) {
    const id = data.userId;
    if (id != null) {
      this.userService.getUserReportById(id).subscribe((result) => {
        this.userReport = result;
      });
    } else {
      this.message = 'Please Select an user!!';
      setTimeout(() => {
        this.message = '';
      }, 2000);
    }
  }

  @Output() userSelected = new EventEmitter<any>();
  selectedUser: any;
}
