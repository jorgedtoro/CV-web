import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-app-teacher',
  templateUrl: './view-app-teacher.component.html',
  styleUrls: ['./view-app-teacher.component.scss'],
})
export class ViewAppTeacherComponent implements OnInit {
  translate: number = 0;
  constructor() {}

  ngOnInit(): void {}

  carrouselHandler(event: any) {
    // const carrousel = document.querySelector('.carrousel');
    const point = event.target.id;

    if (point == 'prev' && this.translate != 0) {
      this.translate = this.translate + 33.3;
    }
    if (point == 'next' && this.translate != -66.6) {
      this.translate = this.translate - 33.3;
    }
  }
}
