import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatgestadComponent } from './addmatgestad.component';

describe('AddmatgestadComponent', () => {
  let component: AddmatgestadComponent;
  let fixture: ComponentFixture<AddmatgestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmatgestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmatgestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
