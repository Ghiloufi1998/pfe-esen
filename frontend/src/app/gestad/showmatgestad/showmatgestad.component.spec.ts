import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmatgestadComponent } from './showmatgestad.component';

describe('ShowmatgestadComponent', () => {
  let component: ShowmatgestadComponent;
  let fixture: ComponentFixture<ShowmatgestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmatgestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmatgestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
