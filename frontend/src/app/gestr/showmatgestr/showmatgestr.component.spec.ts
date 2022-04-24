import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmatgestrComponent } from './showmatgestr.component';

describe('ShowmatgestrComponent', () => {
  let component: ShowmatgestrComponent;
  let fixture: ComponentFixture<ShowmatgestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmatgestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmatgestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
