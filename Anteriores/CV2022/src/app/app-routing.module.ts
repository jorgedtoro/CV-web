import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ViewExperienceComponent } from './components/view-experience/view-experience.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HeroComponent },
  { path: 'viewExperience/:idExperience', component: ViewExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:idProject', component: ProjectViewComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
