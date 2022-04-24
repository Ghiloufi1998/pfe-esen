import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecgestrComponent } from './showrecgestr.component';

describe('ShowrecgestrComponent', () => {
  let component: ShowrecgestrComponent;
  let fixture: ComponentFixture<ShowrecgestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrecgestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecgestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
