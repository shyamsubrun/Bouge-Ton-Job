import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { JobListComponent } from '../../component/job-list/job-list.component';
import { CommonModule } from '@angular/common'; // Ajoute cette ligne
import { HttpClientModule } from '@angular/common/http'; // Ajoute cette ligne
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, HeaderComponent, FooterComponent, JobListComponent],
  providers: [MockDataService], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
  

export class HomeComponent {

}
