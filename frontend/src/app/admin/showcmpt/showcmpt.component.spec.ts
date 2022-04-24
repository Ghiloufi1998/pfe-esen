import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcmptComponent } from './showcmpt.component';

describe('ShowcmptComponent', () => {
  let component: ShowcmptComponent;
  let fixture: ComponentFixture<ShowcmptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcmptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
