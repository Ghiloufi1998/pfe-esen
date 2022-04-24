import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifmatgestadComponent } from './modifmatgestad.component';

describe('ModifmatgestadComponent', () => {
  let component: ModifmatgestadComponent;
  let fixture: ComponentFixture<ModifmatgestadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifmatgestadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifmatgestadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
