import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowraprecgestadComponent } from './showraprecgestad.component';

describe('ShowraprecgestadComponent', () => {
  let component: ShowraprecgestadComponent;
  let fixture: ComponentFixture<ShowraprecgestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowraprecgestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowraprecgestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
