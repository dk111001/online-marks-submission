import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCourseComponent } from './faculty-course.component';

describe('FacultyCourseComponent', () => {
  let component: FacultyCourseComponent;
  let fixture: ComponentFixture<FacultyCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
