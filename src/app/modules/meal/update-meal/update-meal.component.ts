import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { MessServiceService } from '../../../services/mess-service.service';
import { meal, user } from '../../../interface/data-type';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrl: './update-meal.component.css'
})
export class UpdateMealComponent implements OnInit{

  backIcon = faArrowLeft;
  users: user[] | undefined;
  mealData: meal | undefined;
  selectedUser: number | undefined;
  selectedMealId: number | undefined;
  selectedUserMessId: number | undefined;
  updateMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private messService: MessServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let mealId = this.route.snapshot.paramMap.get('id');
    mealId &&
      this.messService.getAMeal(mealId).subscribe((data) => {
        this.mealData = data;

        this.selectedMealId = this.mealData.id;
        this.selectedUser = this.mealData?.user?.id;
      });

    this.loadUsers();
  }


  updateAMeal(data: any, messId: any) {    
    // Modify the JSON format
    var mealData = {
      mess: {
        id: messId,
      },
      user: {
        id: data.userId,
      },
      date: data.date,
      mealNumber: data.mealNumber
    };

    this.messService.updateAMeal(mealData, this.selectedMealId).subscribe(() => {
      this.updateMessage = 'Meal is Successfully Updated';

      setTimeout(() => {
        this.updateMessage = undefined;
        this.router.navigate(['/meal']);
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
