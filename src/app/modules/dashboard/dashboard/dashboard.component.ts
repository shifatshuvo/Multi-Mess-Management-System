import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  editIcon = faEdit;
  deleteIcon = faTrash;
  plusIcon = faPlus;

  constructor() {}

  ngOnInit(): void {
    
  }


  delete() {
    
  }

}
