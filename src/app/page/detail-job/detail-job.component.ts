import { Component } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-job',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule,],
  templateUrl: './detail-job.component.html',
  styleUrl: './detail-job.component.scss',
  providers: [MockDataService]
})
export class DetailJobComponent {
  job: any;

  constructor(
    private route: ActivatedRoute,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.mockDataService.getJobListings().subscribe(data => {
      this.job = data.find((job: any) => job.id === jobId);
    });
  }
}