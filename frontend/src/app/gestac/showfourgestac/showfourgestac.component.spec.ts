import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfourgestacComponent } from './showfourgestac.component';

describe('ShowfourgestacComponent', () => {
  let component: ShowfourgestacComponent;
  let fixture: ComponentFixture<ShowfourgestacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfourgestacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfourgestacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
