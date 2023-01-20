import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { AsideProfileComponent } from './components/aside-profile/aside-profile.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormComponent } from './components/form/form.component';
import { EmailService } from './services/email.service';
import { ViewAppTeacherComponent } from './components/view-app-teacher/view-app-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    AsideProfileComponent,
    HeroComponent,
    ContactComponent,
    ListProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    FormComponent,
    ViewAppTeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
