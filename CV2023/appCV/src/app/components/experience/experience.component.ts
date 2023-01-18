import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  activo: boolean = false;
  experience: any;

  constructor(
    private router: Router,
    private experienceService: ExperienceService
  ) {}

  ngOnInit(): void {
    this.experience = this.experienceService.getAll();
    // console.log(this.experience);
  }

  showModal(event: any) {
    // console.log(event);
    const id = parseInt(event.target.id);
    // console.log(id);
    this.activo = !this.activo;
    this.experience = this.experienceService.getExperienceById(id);
    // console.log(this.experience);
  }
  closeModal() {
    this.activo = !this.activo;
    this.router.navigate(['/experience']);
  }
}
