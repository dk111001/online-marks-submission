import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerCourseComponent } from './controller-course.component';

describe('ControllerCourseComponent', () => {
  let component: ControllerCourseComponent;
  let fixture: ComponentFixture<ControllerCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
