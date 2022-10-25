import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navigateTo($event: any) {
    const hash: string = $event.target.hash;
    const element = document.querySelector(hash);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
