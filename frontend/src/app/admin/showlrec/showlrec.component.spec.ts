import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlrecComponent } from './showlrec.component';

describe('ShowlrecComponent', () => {
  let component: ShowlrecComponent;
  let fixture: ComponentFixture<ShowlrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
