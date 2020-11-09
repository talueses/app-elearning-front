import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsuarioComponent } from './new-usuario.component';

describe('NewUsuarioComponent', () => {
  let component: NewUsuarioComponent;
  let fixture: ComponentFixture<NewUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
