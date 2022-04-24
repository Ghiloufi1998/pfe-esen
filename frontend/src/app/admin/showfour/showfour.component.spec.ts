import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfourComponent } from './showfour.component';

describe('ShowfourComponent', () => {
  let component: ShowfourComponent;
  let fixture: ComponentFixture<ShowfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
