import { Component, OnInit } from '@angular/core';
import { MessServiceService } from '../../../services/mess-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/user-service.service';
import { meal, user } from '../../../interface/data-type';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrl: './add-meal.component.css'
})
export class AddMealComponent implements OnInit{

  backIcon = faArrowLeft;
  users: user[] | undefined;
  mealData: meal | undefined;
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

  addMeal(data: any) {
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
        mealNumber: data.mealNumber
      };

      this.messService.addMeal(fundData).subscribe(() => {
        this.addMessage = 'Meal is Successfully added';

        setTimeout(() => {
          this.addMessage = undefined;
          this.router.navigate(['/meal']);
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
