import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  categorias: string[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getAll();
    this.getCategory();
  }

  async getCategory() {
    //me traigo las categorías
    this.projects = await this.projectsService.getAll();
    const arrCategoryProjects = this.projects.map(
      (project) => project.category
    ); //trae array con categorías--> pero repetidas
    this.categorias = Array.from(new Set(arrCategoryProjects)); //nos quedamos con las categorías únicas
    console.log(this.categorias);
  }
}
