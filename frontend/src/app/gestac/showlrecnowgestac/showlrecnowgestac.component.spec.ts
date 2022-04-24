import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlrecnowgestacComponent } from './showlrecnowgestac.component';

describe('ShowlrecnowgestacComponent', () => {
  let component: ShowlrecnowgestacComponent;
  let fixture: ComponentFixture<ShowlrecnowgestacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlrecnowgestacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlrecnowgestacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
