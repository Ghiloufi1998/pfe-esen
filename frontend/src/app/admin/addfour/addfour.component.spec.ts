import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfourComponent } from './addfour.component';

describe('AddfourComponent', () => {
  let component: AddfourComponent;
  let fixture: ComponentFixture<AddfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
