import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGestrComponent } from './board-gestr.component';

describe('BoardGestrComponent', () => {
  let component: BoardGestrComponent;
  let fixture: ComponentFixture<BoardGestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
