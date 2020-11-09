import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterExamComponent } from './footer-exam.component';

describe('FooterExamComponent', () => {
  let component: FooterExamComponent;
  let fixture: ComponentFixture<FooterExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
