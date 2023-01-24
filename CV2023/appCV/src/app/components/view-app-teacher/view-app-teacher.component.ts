import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-app-teacher',
  templateUrl: './view-app-teacher.component.html',
  styleUrls: ['./view-app-teacher.component.scss'],
})
export class ViewAppTeacherComponent implements OnInit {
  translate: any = '';
  constructor() {}

  ngOnInit(): void {}

  carrouselHandler(event: any) {
    const carrousel = document.querySelector('.carrousel');
    const point = event.target.id;
    let position;
    if (point == 'prev') {
      position = 0;
    } else {
      position = 1;
    }
    let translate = position * -33.3;
    // carrousel?.className.sty
  }
}
