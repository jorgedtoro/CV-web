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
    pricing: '2016 -- Actualidad',
    merchan: '2015 -- Actualidad',
  };
  description: any = {
    fsd: 'He terminado el master de Full Stack Developer en la UNIR y estoy desarrollando proyectos por mi cuenta ',
    pricing:
      'Actualmente soy el responsable del departamento de pricing de la división de Electrónica en el Corte Inglés.',

    merchan:
      'Actualmente soy el responsable de la planificación del departamento de informática dentro de la división de electrónica',
  };
  tecnology: string[] = [];
  tecnologyDev: string[] = [];
  responsabilidades: string[] = [];
  responsabilidadesDev: string[] = [];
  empresa: string = 'El Corte Inglés';
  id: string = '';

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
          this.responsabilidades = [
            'Desarrollo Front End con HTML, CSS, SASS, SCSS y JavaScript.',
            'Desarrollo Back End con Node Js, Express, MongoDb y MySQL.',
            'Control de versiones con git.',
            'Uso de framework Angular.',
            'Diseño previo con Figma.',
          ];
          break;
        }
        case 2: {
          this.dinamicText = this.dinamicText.pricing;
          this.period = this.period.pricing;
          this.description = this.description.pricing;
          this.tecnology = [
            'Python',
            'VBA',
            'Excel',
            'SAS',
            'SQL',
            'Minderest',
            'Microstrategy',
            'GFK newron',
          ];
          this.responsabilidades = [
            'Análisis de resultados y toma de decisiones.',
            'Diseño y estandarización de informes necesarios para la toma de decisiones',
            'Automatización de procesos y creación de informes con el objetivo de dar visibilidad de los CPI',
            'Utilización de herramientas de GFK (Retal Scout, Retail Intelligence) y de IBM (Demandtec) para la consecución de los objetivos de la dirección y el seguimiento de la competencia de precios.',
            'Seguimiento táctico semanal de productos del Hitlist.',
            'Supervisión y ayuda de mejora en las herramientas de GFK (control de incorrect Match, feed, adecuación)',
            'Seguimiento de índices de competencia en catálogos y ofertas para la rentabilización de los objetivos.',
          ];
          break;
        }
        case 3: {
          this.id = '3';
          this.dinamicText = this.dinamicText.merchan;
          this.period = this.period.merchan;
          this.description = this.description.merchan;
          this.tecnology = [
            'Python',
            'VBA',
            'Excel',
            'SAS',
            'SQL',
            'SAP',
            'Microstrategy',
            'Power Bi',
          ];
          this.responsabilidades = [
            'Coordinar la implementación de procedimientos de trabajo y cuadros de mando en el resto de áreas de la división. Supervisar tareas de planificación del equipo. Participar en grupos de trabajo a nivel empresa de desarrollo de herramientas de Planificación y Gestión.',
            'Presupuestar objetivos mensuales de beneficio y margen por categoría para alcanzar objetivos semestrales fijados por Dirección. (Bottom up)',
            'Planificación semestral de la compra por categoría: objetivos mensualizados de entradas y stock. ',
            'Elaboración de informe financiero de resultados de cierre mensual y análisis de desviaciones.  ',
            'Control del OTB. Adecuar la cantidad necesaria de producto para cumplir con los objetivos establecidos. Seguimiento semanal, análisis de desviaciones y acciones correctoras. ',
            'Análisis rentabilidad por proveedor y categoría. DAFO. ',
            'Control de acciones promocionales y liquidación de mercancía obsoleta según ciclo de vida, rotación y sanidad del stock.',
            'Responsable del equipo de aprovisionamiento y administración del dpto. (2 personas)',
          ];
          this.responsabilidadesDev = [
            'Desarrollo de un Escenario Promocional en VBA para controlar el coste, el retorno y todos los KPIs necesarios en una promoción en la división de Electrónica.',
            'Desarrollo de flujos de trabajo automático. Automatización de tareas.',
            'Desarrollo de macros Excel VBA con conexión a AS400(IBM).',
            'Preprocesamiento de datos con SAS.',
            'Análisis de datos y desarrollo de cuadros de mando para toma de decisiones.',
          ];
          this.tecnologyDev = [
            'VBA',
            'Excel',
            'SAS',
            'SQL',
            'SAP',
            'Microstrategy',
          ];

          break;
        }
      }
    });
  }
}
