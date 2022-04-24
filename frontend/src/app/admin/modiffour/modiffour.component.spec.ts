import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiffourComponent } from './modiffour.component';

describe('ModiffourComponent', () => {
  let component: ModiffourComponent;
  let fixture: ComponentFixture<ModiffourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiffourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiffourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
