import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlrecprocComponent } from './showlrecproc.component';

describe('ShowlrecprocComponent', () => {
  let component: ShowlrecprocComponent;
  let fixture: ComponentFixture<ShowlrecprocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlrecprocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlrecprocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
