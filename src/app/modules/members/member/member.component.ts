import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserServiceService } from '../../../services/user-service.service';
import { user } from '../../../interface/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {

  // userList: user[] | undefined;
  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;
  userList: user[] = [];
  currentPage = 1;
  pageSize = 10;
  deleteMessage: string | undefined;

  constructor(private userService: UserServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList() {
    this.userService.getAllUser().subscribe((result) => {
      this.userList = result;
    })
  }


  getPaginatedUsers(): user[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.userList.slice(startIndex, startIndex + this.pageSize);
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
    return Math.ceil(this.userList.length / this.pageSize);
  }

  getTotalUsers(): number {
    return this.userList.length;
  }



  deleteUser(id: number) {
    this.userService.deleteAUser(id).subscribe(() => {
      this.userList = this.userList.filter(user => user.id !== id);
      // Reload the data to ensure the pagination state is correct
      // this.loadMealData(this.currentPage, this.pageSize);

      this.deleteMessage = 'Successfully Deleted!';

      setTimeout(() => {
        this.deleteMessage = undefined;
        this.router.navigate(['/members']);
      }, 1000);
    });
  }

}
