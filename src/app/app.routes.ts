import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { JobsComponent } from './page/jobs/jobs.component';
import { AproposComponent } from './page/apropos/apropos.component';
import { DetailJobComponent } from './page/detail-job/detail-job.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'jobs/:id', component: DetailJobComponent }, // Route pour les détails du job

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }