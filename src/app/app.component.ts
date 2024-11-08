import { HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BackgroundAnimationComponent } from './component/background-animation/background-animation.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BackgroundAnimationComponent,RouterOutlet,HttpClientModule,HomeComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BougeTonJob';
}

