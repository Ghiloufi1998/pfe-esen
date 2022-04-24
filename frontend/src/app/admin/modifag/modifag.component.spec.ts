import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifagComponent } from './modifag.component';

describe('ModifagComponent', () => {
  let component: ModifagComponent;
  let fixture: ComponentFixture<ModifagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
