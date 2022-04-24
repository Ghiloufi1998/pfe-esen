import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddagComponent } from './addag.component';

describe('AddagComponent', () => {
  let component: AddagComponent;
  let fixture: ComponentFixture<AddagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
