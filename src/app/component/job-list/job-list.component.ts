import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  providers: [MockDataService]
})
export class JobListComponent implements OnInit {

  jobListings: any[] = [];
  filteredJobListings: any[] = [];

  searchTitle: string = '';
  searchLocation: string = '';
  employmentType: string = '';
  remoteOnly: boolean = false;

  constructor(private mockDataService: MockDataService, private router: Router) {}

  ngOnInit(): void {
    this.loadJobs(); // Charger tous les jobs dès l'initialisation
  }

  loadJobs(): void {
    this.mockDataService.getJobListings().subscribe(data => {
      this.jobListings = data;
      this.filteredJobListings = [...this.jobListings]; // Initialiser filteredJobListings avec tous les jobs
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

  applyFilters(): void {
    const titleQuery = this.searchTitle.toLowerCase();
    const locationQuery = this.searchLocation.toLowerCase();

    this.filteredJobListings = this.jobListings.filter(job => {
      const matchesTitle = titleQuery ? job.title.toLowerCase().includes(titleQuery) : true;
      const matchesLocation = locationQuery ? job.location.toLowerCase().includes(locationQuery) : true;
      const matchesType = this.employmentType ? job.employment_type === this.employmentType : true;
      const matchesRemote = this.remoteOnly ? job.remote : true;

      return matchesTitle && matchesLocation && matchesType && matchesRemote;
    });
  }
}
