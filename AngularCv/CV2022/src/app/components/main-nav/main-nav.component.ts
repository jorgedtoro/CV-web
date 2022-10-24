import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// var $sideBarItems = $('.sideBar .sideBar__item');

// $sideBarItems.click(function (event) {
//   var selectedClass = 'is-side-bar-item-selected';
//   $sideBarItems.removeClass(selectedClass);
//   $(event.target).addClass(selectedClass);
// });
