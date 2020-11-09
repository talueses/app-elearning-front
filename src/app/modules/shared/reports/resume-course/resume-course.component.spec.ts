import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCourseComponent } from './resume-course.component';

describe('ResumeCourseComponent', () => {
  let component: ResumeCourseComponent;
  let fixture: ComponentFixture<ResumeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
