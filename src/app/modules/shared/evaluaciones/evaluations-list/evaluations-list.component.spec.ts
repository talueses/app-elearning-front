import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsListComponent } from './evaluations-list.component';

describe('EvaluationsListComponent', () => {
  let component: EvaluationsListComponent;
  let fixture: ComponentFixture<EvaluationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
