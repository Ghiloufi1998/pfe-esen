import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowagComponent } from './showag.component';

describe('ShowagComponent', () => {
  let component: ShowagComponent;
  let fixture: ComponentFixture<ShowagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
