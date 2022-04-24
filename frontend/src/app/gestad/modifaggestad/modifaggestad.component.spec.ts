import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifaggestadComponent } from './modifaggestad.component';

describe('ModifaggestadComponent', () => {
  let component: ModifaggestadComponent;
  let fixture: ComponentFixture<ModifaggestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifaggestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifaggestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
