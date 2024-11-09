import { Component, OnInit } from '@angular/core';
import { JobListComponent } from "../../component/job-list/job-list.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { MockDataService } from '../../services/mock-data.service';  

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    JobListComponent
],
  providers: [MockDataService], 
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  
}
