import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecnowadComponent } from './showrecnowad.component';

describe('ShowrecnowadComponent', () => {
  let component: ShowrecnowadComponent;
  let fixture: ComponentFixture<ShowrecnowadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrecnowadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecnowadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
