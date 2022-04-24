import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlrecgestacComponent } from './showlrecgestac.component';

describe('ShowlrecgestacComponent', () => {
  let component: ShowlrecgestacComponent;
  let fixture: ComponentFixture<ShowlrecgestacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlrecgestacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlrecgestacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
