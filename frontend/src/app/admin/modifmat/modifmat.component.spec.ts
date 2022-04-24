import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifmatComponent } from './modifmat.component';

describe('ModifmatComponent', () => {
  let component: ModifmatComponent;
  let fixture: ComponentFixture<ModifmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
