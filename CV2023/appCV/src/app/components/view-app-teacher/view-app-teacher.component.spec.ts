import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppTeacherComponent } from './view-app-teacher.component';

describe('ViewAppTeacherComponent', () => {
  let component: ViewAppTeacherComponent;
  let fixture: ComponentFixture<ViewAppTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
