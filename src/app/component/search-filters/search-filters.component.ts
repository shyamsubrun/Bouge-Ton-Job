import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss'
})
export class SearchFiltersComponent {

  searchTitle: string = '';
  searchLocation: string = '';
  employmentType: string = '';
  remoteOnly: boolean = false;

  @Output() filtersChanged = new EventEmitter<any>();
  @Output() searchClicked = new EventEmitter<any>(); // Nouvel événement pour le clic sur le bouton

  applyFilters(): void {
    this.filtersChanged.emit({
      title: this.searchTitle,
      location: this.searchLocation,
      type: this.employmentType,
      remoteOnly: this.remoteOnly
    });
  }

  onSearch(): void {
    this.searchClicked.emit({
      title: this.searchTitle,
      location: this.searchLocation,
      type: this.employmentType,
      remoteOnly: this.remoteOnly
    });
  }
}