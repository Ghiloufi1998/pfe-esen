import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecComponent } from './showrec.component';

describe('ShowrecComponent', () => {
  let component: ShowrecComponent;
  let fixture: ComponentFixture<ShowrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
