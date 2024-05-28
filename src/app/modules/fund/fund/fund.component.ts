import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MessServiceService } from '../../../services/mess-service.service';
import { fund, user } from '../../../interface/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrl: './fund.component.css'
})
export class FundComponent implements OnInit {

  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;
  nextIcon = faArrowRight;
  prevIcon = faArrowLeft;
  funds: fund[] = [];
  currentPage = 0;
  pageSize = 2;
  totalPages: number = 0;
  deleteMessage: string | undefined;
  userData: user | undefined;

  constructor(private messService: MessServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadFundData(this.currentPage, this.pageSize); // Load initial data
  }

  loadFundData(page: number, size: number) {
    this.messService.getFundData(page, size).subscribe(response => {
      this.funds = response.content;
      this.totalPages = response.totalPages;
    });


    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      this.userData = user;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadFundData(this.currentPage, this.pageSize);
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadFundData(this.currentPage, this.pageSize);
    }
  }

  hasNextPage(): boolean {
    return this.currentPage < this.totalPages - 1;
  }

  deleteFund(id: number) {
    this.messService.deleteFund(id).subscribe(() => {
      this.funds = this.funds.filter(fund => fund.id !== id);
      // Reload the data to ensure the pagination state is correct
      this.loadFundData(this.currentPage, this.pageSize);

      this.deleteMessage = 'Successfully Deleted!';

      setTimeout(() => {
        this.deleteMessage = undefined;
        this.router.navigate(['/fund']);
      }, 1000);
    });
  }
}










  // loadFunds() {
  //   this.messService.getFundList().subscribe((result) => {
  //     this.funds = result;
  //   })
  // }




  // export class FundComponent implements OnInit {

  //   editIcon = faEdit;
  //   deleteIcon = faTrash;
  //   plusIcon = faPlus;
  //   nextIcon = faArrowRight;
  //   prevIcon = faArrowLeft;
  //   funds: fund[] = [];
  //   currentPage = 1;
  //   pageSize = 2;
  
  //   constructor(private messService: MessServiceService) {}
  
  //   ngOnInit(): void {
  //     this.loadFundData(0, 2); // Load initial data
  //   }
  
  
  //   loadFundData(page: number, size: number) {
  //     this.messService.getFundData(page, size)
  //       .subscribe(response => {
  //         this.funds = response;
  //       });
  //   }
  
  
  
  //   nextPage() {
  //     this.currentPage++;
  //     this.loadFundData(this.currentPage - 1, this.pageSize);
  //   }
  
  //   previousPage() {
  //     if (this.currentPage > 1) {
  //       this.currentPage--;
  //       this.loadFundData(this.currentPage - 1, this.pageSize);
  //     }
  //   }
  
  
  //   deleteFund(id: number) {
  //     this.messService.deleteFund(id).subscribe(() => {
  //       this.funds = this.funds.filter(fund => fund.id !== id);
  //     });
  //   }
  
  
  // }