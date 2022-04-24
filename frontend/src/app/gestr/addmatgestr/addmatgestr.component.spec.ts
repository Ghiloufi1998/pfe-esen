import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatgestrComponent } from './addmatgestr.component';

describe('AddmatgestrComponent', () => {
  let component: AddmatgestrComponent;
  let fixture: ComponentFixture<AddmatgestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmatgestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmatgestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
