import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddraprecComponent } from './addraprec.component';

describe('AddraprecComponent', () => {
  let component: AddraprecComponent;
  let fixture: ComponentFixture<AddraprecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddraprecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddraprecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
