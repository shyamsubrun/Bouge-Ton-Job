import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { JobsComponent } from './page/jobs/jobs.component';
import { AproposComponent } from './page/apropos/apropos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'apropos', component: AproposComponent },
  { path: '**', redirectTo: '' } // Redirection vers Home pour les routes inconnues
];