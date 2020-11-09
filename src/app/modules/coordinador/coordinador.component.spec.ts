import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorComponent } from './coordinador.component';

describe('CoordinadorComponent', () => {
  let component: CoordinadorComponent;
  let fixture: ComponentFixture<CoordinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
