import { HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BackgroundAnimationComponent } from './component/background-animation/background-animation.component';
import { routes } from './app.routes';
import { HeaderComponent } from "./component/header/header.component";
import { JobsComponent } from './page/jobs/jobs.component';
import { AproposComponent } from './page/apropos/apropos.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BackgroundAnimationComponent, RouterOutlet,
     RouterModule, HttpClientModule, FooterComponent,
     HomeComponent, HeaderComponent,JobsComponent,
    AproposComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BougeTonJob';
}

