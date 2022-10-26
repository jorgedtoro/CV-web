import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-experience',
  templateUrl: './view-experience.component.html',
  styleUrls: ['./view-experience.component.scss'],
})
export class ViewExperienceComponent implements OnInit {
  dinamicText: any = {
    fsd: 'Full Stack Developer',
    pricing: 'Responsable del departamento de pricing',
    merchan: 'Merchandise Senior informática',
  };
  period: any = {
    fsd: 'Diciembre 2022 -- Actualidad',
    pricing: 'Noviembre 2016 -- Actualidad',
    merchan: 'Noviembre 2014 -- Actualidad',
  };
  description: any = {
    fsd: 'He terminado el master de Full Stack Developer en la UNIR y estoy desarrollando proyectos por mi cuenta ',
    pricing:
      'Actualmente soy el responsable del departamento de pricing de la división de Electrónica en el Corte Inglés.',

    merchan:
      'Actualmente soy el responsable de la planificación del departamento de informática dentro de la división de electrónica',
  };
  tecnology: any = [];
  empresa: string = 'El Corte Inglés';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //diferencia entre experiencias
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.idExperience);
      switch (id) {
        case 1: {
          this.dinamicText = this.dinamicText.fsd;
          this.period = this.period.fsd;
          this.empresa = 'Freelance';
          this.description = this.description.fsd;
          this.tecnology = [
            'Angular',
            'Javascript',
            'NodeJs',
            'HTML',
            'CSS',
            'Express',
            'MongoDb',
            'MySQL',
            'Figma',
          ];
          break;
        }
        case 2: {
          this.dinamicText = this.dinamicText.pricing;
          this.period = this.period.pricing;
          this.description = this.description.pricing;
          break;
        }
        case 3: {
          this.dinamicText = this.dinamicText.merchan;
          this.period = this.period.merchan;
          this.description = this.description.merchan;
          break;
        }
      }
    });
  }
}
