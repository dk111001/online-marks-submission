import { TestBed } from '@angular/core/testing';

import { FacultyCourseService } from './faculty-course.service';

describe('FacultyCourseService', () => {
  let service: FacultyCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
