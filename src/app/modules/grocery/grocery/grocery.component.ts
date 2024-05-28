import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MessServiceService } from '../../../services/mess-service.service';
import { groceryBill, user } from '../../../interface/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent implements OnInit {

  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;
  gBills: groceryBill[] = [];
  nextIcon = faArrowRight;
  prevIcon = faArrowLeft;
  deleteMessage: string | undefined;
  userData: user | undefined;
  currentPage = 1;
  pageSize = 10;

  constructor(private messService: MessServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadGroceryBills();

    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      this.userData = user;
    }
  }

  loadGroceryBills() {
    this.messService.getGroceryBillList().subscribe((result) => {
      this.gBills = result;
    })
  }


  getPaginatedGBills(): groceryBill[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.gBills.slice(startIndex, startIndex + this.pageSize);
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
    return Math.ceil(this.gBills.length / this.pageSize);
  }


  deleteGBill(id: number) {

    this.messService.deleteGBill(id).subscribe(() => {
      this.gBills = this.gBills.filter(gBills => gBills.id !== id);
      // // Reload the data to ensure the pagination state is correct
      // this.loadFundData(this.currentPage, this.pageSize);

      this.deleteMessage = 'Successfully Deleted!';

      setTimeout(() => {
        this.deleteMessage = undefined;
        this.router.navigate(['grocery/grocery-bill']);
      }, 1000);
    });
  }

}
