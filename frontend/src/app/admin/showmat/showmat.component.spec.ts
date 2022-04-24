import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmatComponent } from './showmat.component';

describe('ShowmatComponent', () => {
  let component: ShowmatComponent;
  let fixture: ComponentFixture<ShowmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
