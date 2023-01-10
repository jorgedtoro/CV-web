import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-profile',
  templateUrl: './aside-profile.component.html',
  styleUrls: ['./aside-profile.component.scss'],
})
export class AsideProfileComponent implements OnInit {
  mobileDisplay: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  show() {
    this.mobileDisplay = !this.mobileDisplay;
  }
}
