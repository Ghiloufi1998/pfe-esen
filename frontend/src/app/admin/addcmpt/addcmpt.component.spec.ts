import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcmptComponent } from './addcmpt.component';

describe('AddcmptComponent', () => {
  let component: AddcmptComponent;
  let fixture: ComponentFixture<AddcmptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcmptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
