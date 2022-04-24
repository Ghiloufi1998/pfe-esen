import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaggestadComponent } from './showaggestad.component';

describe('ShowaggestadComponent', () => {
  let component: ShowaggestadComponent;
  let fixture: ComponentFixture<ShowaggestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowaggestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaggestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
