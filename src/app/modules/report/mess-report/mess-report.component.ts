import { Component, OnInit } from '@angular/core';
import { MessServiceService } from '../../../services/mess-service.service';
import { messReport } from '../../../interface/data-type';

@Component({
  selector: 'app-mess-report',
  templateUrl: './mess-report.component.html',
  styleUrl: './mess-report.component.css'
})
export class MessReportComponent implements OnInit {

  mReport: messReport | undefined;

  constructor(private messService: MessServiceService) {}

  ngOnInit(): void {
    this.messReport();
  }


  messReport() {
    this.messService.getMessReport().subscribe((result) => {
      this.mReport = result;
    })
  }

}
