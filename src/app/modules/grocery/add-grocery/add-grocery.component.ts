import { Component, OnInit } from '@angular/core';
import { groceryBill, user } from '../../../interface/data-type';
import { MessServiceService } from '../../../services/mess-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrl: './add-grocery.component.css'
})
export class AddGroceryComponent implements OnInit{

  backIcon = faArrowLeft;
  users: user[] | undefined;
  groceryData: groceryBill | undefined;
  addMessage: string | undefined;
  selectedUser: number | undefined;

  constructor(
    private messService: MessServiceService,
    private router: Router,
    private userService: UserServiceService
  ) {}


  ngOnInit(): void {
    this.loadUsers();
  }

  addGroceryBill(data: any) {
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      const messId = user.messId;

    // Modify the JSON format
    var groceryData = {
      mess: {
        id: messId,
      },
      user: {
        id: data.userId,
      },
      date: data.date,
      amount: parseInt(data.amount), // Convert cash to integer
      description: data.description
    };

      this.messService.addGroceryBills(groceryData).subscribe(() => {
        this.addMessage = 'Bill is Successfully added';

        setTimeout(() => {
          this.addMessage = undefined;
          this.router.navigate(['/grocery/grocery-bill']);
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
