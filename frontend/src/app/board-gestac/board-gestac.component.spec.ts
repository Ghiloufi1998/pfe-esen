import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGestacComponent } from './board-gestac.component';

describe('BoardGestacComponent', () => {
  let component: BoardGestacComponent;
  let fixture: ComponentFixture<BoardGestacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGestacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGestacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
