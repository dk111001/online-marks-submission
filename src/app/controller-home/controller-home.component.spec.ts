import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerHomeComponent } from './controller-home.component';

describe('ControllerHomeComponent', () => {
  let component: ControllerHomeComponent;
  let fixture: ComponentFixture<ControllerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
