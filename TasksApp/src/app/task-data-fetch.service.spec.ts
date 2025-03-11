import { TestBed } from '@angular/core/testing';

import { TaskDataFetchService } from './task-data-fetch.service';

describe('TaskDataFetchService', () => {
  let service: TaskDataFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
