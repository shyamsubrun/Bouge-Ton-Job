import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundAnimationComponent } from './component/background-animation/background-animation.component';
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundAnimationComponent,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'BougeTonJob';
}

