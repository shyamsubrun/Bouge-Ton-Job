import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  searchTitle: string = '';
  searchLocation: string = '';
  employmentType: string = '';

  constructor(private mockDataService: MockDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadJobs();

    // Lire les paramètres de la requête pour initialiser les filtres
    this.route.queryParams.subscribe(params => {
      this.searchTitle = params['title'] || '';
      this.searchLocation = params['location'] || '';
      this.employmentType = params['type'] || '';
      this.applyFilters(); // Appliquer les filtres dès que les paramètres sont chargés
    });
  }

  loadJobs(): void {
    this.mockDataService.getJobListings().subscribe(data => {
      this.jobListings = data;
      this.filteredJobListings = [...this.jobListings];
      this.applyFilters(); // Appliquer les filtres à tous les jobs chargés
    });
  }

  onFiltersChanged(filters: any): void {
    this.searchTitle = filters.title;
    this.searchLocation = filters.location;
    this.employmentType = filters.type;
    this.applyFilters();
  }

  applyFilters(): void {
    const titleQuery = this.searchTitle.toLowerCase();
    const locationQuery = this.searchLocation.toLowerCase();

    this.filteredJobListings = this.jobListings.filter(job => {
      const matchesTitle = titleQuery ? job.title.toLowerCase().includes(titleQuery) : true;
      const matchesLocation = locationQuery ? job.location.toLowerCase().includes(locationQuery) : true;
      const matchesType = this.employmentType ? job.employment_type === this.employmentType : true;
      
      return matchesTitle && matchesLocation && matchesType;
    });
  }
}