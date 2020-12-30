import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFacultyComponent } from './header-faculty.component';

describe('HeaderFacultyComponent', () => {
  let component: HeaderFacultyComponent;
  let fixture: ComponentFixture<HeaderFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
