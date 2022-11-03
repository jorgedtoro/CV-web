import { Injectable } from '@angular/core';
import { PROYECTOS } from '../db/projects.db';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private arrProjects: Project[] = [];

  constructor() {
    this.arrProjects = PROYECTOS;
  }

  getAll() {
    return this.arrProjects;
  }
  getProject(id: number) {
    return this.arrProjects.find((project) => project.id === id);
  }
}
