import { Component, OnInit } from '@angular/core';
import { JobListComponent } from "../../component/job-list/job-list.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { MockDataService } from '../../services/mock-data.service';  
import { SearchFiltersComponent } from '../../component/search-filters/search-filters.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    JobListComponent,SearchFiltersComponent
],
  providers: [SearchFiltersComponent,MockDataService], 
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent  {

  jobListings: any[] = [];
  filteredJobListings: any[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.mockDataService.getJobListings().subscribe(data => {
      this.jobListings = data;
      this.filteredJobListings = [...this.jobListings];
    });
  }

  onFiltersChanged(filters: any): void {
    const titleQuery = filters.title.toLowerCase();
    const locationQuery = filters.location.toLowerCase();

    this.filteredJobListings = this.jobListings.filter(job => {
      const matchesTitle = titleQuery ? job.title.toLowerCase().includes(titleQuery) : true;
      const matchesLocation = locationQuery ? job.location.toLowerCase().includes(locationQuery) : true;
      const matchesType = filters.type ? job.employment_type === filters.type : true;
      const matchesRemote = filters.remoteOnly ? job.remote : true;

      return matchesTitle && matchesLocation && matchesType && matchesRemote;
    });
  }
}