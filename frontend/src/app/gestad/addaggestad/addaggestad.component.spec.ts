import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaggestadComponent } from './addaggestad.component';

describe('AddaggestadComponent', () => {
  let component: AddaggestadComponent;
  let fixture: ComponentFixture<AddaggestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaggestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaggestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
