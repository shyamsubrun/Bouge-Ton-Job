import { Component } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'] 
})
export class JobListComponent {

  jobListings: any[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mockDataService.getJobListings().subscribe(data => {
      this.jobListings = data;
    });
  }

}
