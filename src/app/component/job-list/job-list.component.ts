import { Component } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'] 
})
export class JobListComponent {

  jobListings: any[] = [];

  constructor(private mockDataService: MockDataService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mockDataService.getJobListings().subscribe(data => {
      this.jobListings = data;
    });
  }

  getDaysAgo(dateString: string): number {
    const publishedDate = new Date(dateString);
    const currentDate = new Date();
    const diffInTime = currentDate.getTime() - publishedDate.getTime();
    return Math.floor(diffInTime / (1000 * 3600 * 24)); // Convertir la différence en jours
  }

  goToJobDetail(id: number): void {
    this.router.navigate(['/jobs', id]);
  }
}
