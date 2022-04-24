import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddraprecgestadComponent } from './addraprecgestad.component';

describe('AddraprecgestadComponent', () => {
  let component: AddraprecgestadComponent;
  let fixture: ComponentFixture<AddraprecgestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddraprecgestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddraprecgestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
