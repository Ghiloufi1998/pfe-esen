import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifrecgestacComponent } from './modifrecgestac.component';

describe('ModifrecgestacComponent', () => {
  let component: ModifrecgestacComponent;
  let fixture: ComponentFixture<ModifrecgestacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifrecgestacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifrecgestacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
