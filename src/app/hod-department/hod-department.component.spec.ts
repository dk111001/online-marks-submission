import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodDepartmentComponent } from './hod-department.component';

describe('HodDepartmentComponent', () => {
  let component: HodDepartmentComponent;
  let fixture: ComponentFixture<HodDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
