import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfourgestacComponent } from './addfourgestac.component';

describe('AddfourgestacComponent', () => {
  let component: AddfourgestacComponent;
  let fixture: ComponentFixture<AddfourgestacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfourgestacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfourgestacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
