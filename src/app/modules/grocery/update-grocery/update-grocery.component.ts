import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fund, groceryBill, user } from '../../../interface/data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { MessServiceService } from '../../../services/mess-service.service';

@Component({
  selector: 'app-update-grocery',
  templateUrl: './update-grocery.component.html',
  styleUrl: './update-grocery.component.css'
})
export class UpdateGroceryComponent implements OnInit{

  backIcon = faArrowLeft;
  users: user[] | undefined;
  groceryData: groceryBill | undefined;
  selectedUser: number | undefined;
  selectedGroceryId: number | undefined;
  selectedUserMessId: number | undefined;
  updateMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private messService: MessServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let groceryId = this.route.snapshot.paramMap.get('id');
    groceryId &&
      this.messService.getAGrocery(groceryId).subscribe((data) => {
        this.groceryData = data;

        this.selectedGroceryId = this.groceryData.id;
        this.selectedUser = this.groceryData?.user?.id;
      });

    this.loadUsers();
  }


  updateGrocery(data: any, messId: any) {    
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
    

    this.messService.updateAGroceryBill(groceryData, this.selectedGroceryId).subscribe(() => {
      this.updateMessage = 'grocery is Successfully Updated';

      setTimeout(() => {
        this.updateMessage = undefined;
        this.router.navigate(['/grocery/grocery-bill']);
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
