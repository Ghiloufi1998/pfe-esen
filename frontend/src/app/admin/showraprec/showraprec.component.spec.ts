import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowraprecComponent } from './showraprec.component';

describe('ShowraprecComponent', () => {
  let component: ShowraprecComponent;
  let fixture: ComponentFixture<ShowraprecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowraprecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowraprecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
