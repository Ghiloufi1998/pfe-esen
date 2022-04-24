import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGestadComponent } from './board-gestad.component';

describe('BoardGestadComponent', () => {
  let component: BoardGestadComponent;
  let fixture: ComponentFixture<BoardGestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
