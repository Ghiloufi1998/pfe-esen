import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifmatgestrComponent } from './modifmatgestr.component';

describe('ModifmatgestrComponent', () => {
  let component: ModifmatgestrComponent;
  let fixture: ComponentFixture<ModifmatgestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifmatgestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifmatgestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
