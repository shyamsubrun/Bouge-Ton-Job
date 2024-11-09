import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MockDataService } from '../../services/mock-data.service';
import { MainContentComponent } from '../../component/main-content/main-content.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MainContentComponent,    
  ],

  providers: [MockDataService], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
  

export class HomeComponent {

}
