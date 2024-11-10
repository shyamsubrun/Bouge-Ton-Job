import { Component, Input, OnInit } from '@angular/core';
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
export class JobListComponent {

  @Input() jobListings: any[] = [];

  constructor(private router: Router) {}

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