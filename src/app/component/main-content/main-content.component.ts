import { Component } from '@angular/core';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FormsModule, SearchFiltersComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  constructor(private router: Router) {}

  onSearchClicked(filters: any): void {
    // Rediriger vers la page Jobs avec les filtres dans les paramètres de la requête
    this.router.navigate(['/jobs'], {
      queryParams: {
        title: filters.title,
        location: filters.location,
        type: filters.type,
        remoteOnly: filters.remoteOnly
      }
    });
  }
}