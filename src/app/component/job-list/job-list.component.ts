import { Component } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { CommonModule } from '@angular/common'; // Ajoute cette ligne

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {

  jobListings: any[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.mockDataService.getJobListings().subscribe(data => {
      this.jobListings = data;
    });
  }

}
