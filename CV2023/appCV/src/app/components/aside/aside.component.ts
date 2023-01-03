import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  mobileDisplay: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.mobileDisplay = !this.mobileDisplay;
    console.log(this.mobileDisplay);
  }
}
