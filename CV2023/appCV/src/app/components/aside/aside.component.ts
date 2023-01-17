import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  mobileDisplay: boolean = false;
  hero: boolean = false;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/home') {
      this.hero = true;
    }
  }

  show() {
    this.mobileDisplay = !this.mobileDisplay;
  }
}
