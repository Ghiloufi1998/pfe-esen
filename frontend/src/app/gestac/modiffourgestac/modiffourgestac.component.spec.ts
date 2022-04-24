import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiffourgestacComponent } from './modiffourgestac.component';

describe('ModiffourgestacComponent', () => {
  let component: ModiffourgestacComponent;
  let fixture: ComponentFixture<ModiffourgestacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiffourgestacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiffourgestacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
