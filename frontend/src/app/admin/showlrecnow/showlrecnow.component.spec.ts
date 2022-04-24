import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlrecnowComponent } from './showlrecnow.component';

describe('ShowlrecnowComponent', () => {
  let component: ShowlrecnowComponent;
  let fixture: ComponentFixture<ShowlrecnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlrecnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlrecnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
