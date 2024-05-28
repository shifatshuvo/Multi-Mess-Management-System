import { fund } from './../../../interface/data-type';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { user } from '../../../interface/data-type';
import { UserServiceService } from '../../../services/user-service.service';
import { MessServiceService } from '../../../services/mess-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-fund',
  templateUrl: './update-fund.component.html',
  styleUrl: './update-fund.component.css',
})
export class UpdateFundComponent implements OnInit {
  backIcon = faArrowLeft;
  users: user[] | undefined;
  fundData: fund | undefined;
  selectedUser: number | undefined;
  selectedFundId: number | undefined;
  selectedUserMessId: number | undefined;
  updateMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private messService: MessServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let fundId = this.route.snapshot.paramMap.get('id');
    fundId &&
      this.messService.getAFund(fundId).subscribe((data) => {
        this.fundData = data;

        this.selectedFundId = this.fundData.id;
        this.selectedUser = this.fundData?.user?.id;
      });

    this.loadUsers();
  }

  updateFund(data: any, messId: any) {    
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

    this.messService.updateAFund(fundData, this.selectedFundId).subscribe(() => {
      this.updateMessage = 'Fund is Successfully Updated';

      setTimeout(() => {
        this.updateMessage = undefined;
        this.router.navigate(['/fund']);
      }, 1000);
    });
  }

  loadUsers() {
    this.userService.getAllUser().subscribe((result) => {
      this.users = result;
    });
  }

  // Function to handle selection change
  onUserChange(event: any) {
    this.selectedUser = event;
  }
}
