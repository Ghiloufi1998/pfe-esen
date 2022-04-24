import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecgestrComponent } from './addrecgestr.component';

describe('AddrecgestrComponent', () => {
  let component: AddrecgestrComponent;
  let fixture: ComponentFixture<AddrecgestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrecgestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecgestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
