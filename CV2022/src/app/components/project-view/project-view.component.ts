import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {
  //@Input() project!: Project;
  project: Project | any;
  constructor(
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //recupero el id de la ruta
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.idProject); //id project
      //recupero el proyecto por id
      const project = await this.projectsService.getProject(id);
      this.project = project;
    });
  }
}
