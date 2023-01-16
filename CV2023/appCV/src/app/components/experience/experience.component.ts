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

  ngOnInit(): void {}

  showModal(event: any) {
    const id = parseInt(event.path[1].id);
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
