import { Component, OnInit } from '@angular/core';
import { MessServiceService } from '../../../services/mess-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { fund, user } from '../../../interface/data-type';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrl: './add-fund.component.css',
})
export class AddFundComponent implements OnInit {
  backIcon = faArrowLeft;
  users: user[] | undefined;
  fundData: fund | undefined;
  addMessage: string | undefined;
  selectedUser: number | undefined;
  // messId: number | undefined;

  constructor(
    private messService: MessServiceService,
    private router: Router,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  addFund(data: any) {
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      const messId = user.messId;

      // Modify the JSON format
      var fundData = {
        mess: {
          id: messId,
        },
        user: {
          id: data.userId,
        },
        date: data.date,
        cash: parseInt(data.cash), // Convert cash to integer
      };

      this.messService.addFund(fundData).subscribe(() => {
        this.addMessage = 'Fund is Successfully added';

        setTimeout(() => {
          this.addMessage = undefined;
          this.router.navigate(['/fund']);
        }, 1000);
      });
    }
  }

  loadUsers() {
    this.userService.getAllUser().subscribe((result) => {
      this.users = result;
    });
  }
}
