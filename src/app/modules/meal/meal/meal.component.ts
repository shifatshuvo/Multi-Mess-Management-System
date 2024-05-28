import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MessServiceService } from '../../../services/mess-service.service';
import { meal, user } from '../../../interface/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent implements OnInit {


  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;
  nextIcon = faArrowRight;
  prevIcon = faArrowLeft;
  meals: meal[] = [];
  userData: user | undefined;
  currentPage = 1;
  pageSize = 10;
  deleteMessage: string | undefined;

  constructor(private meeService: MessServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadMealList();

    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      this.userData = user;
    }
  }


  loadMealList() {
    this.meeService.getMealList().subscribe((result) => {
      this.meals = result;
    })
  }


  getPaginatedMeals(): meal[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.meals.slice(startIndex, startIndex + this.pageSize);
  }


  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }


  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.meals.length / this.pageSize);
  }


  deleteMeal(id: number) {
    this.meeService.deleteAMeal(id).subscribe(() => {
      this.meals = this.meals.filter(meal => meal.id !== id);
      // Reload the data to ensure the pagination state is correct
      // this.loadMealData(this.currentPage, this.pageSize);

      this.deleteMessage = 'Successfully Deleted!';

      setTimeout(() => {
        this.deleteMessage = undefined;
        this.router.navigate(['/meal']);
      }, 1000);
    });
  }

}
