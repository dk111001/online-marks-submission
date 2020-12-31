import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerDepartmentComponent } from './controller-department.component';

describe('ControllerDepartmentComponent', () => {
  let component: ControllerDepartmentComponent;
  let fixture: ComponentFixture<ControllerDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
