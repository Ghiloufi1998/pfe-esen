import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifrecgestrComponent } from './modifrecgestr.component';

describe('ModifrecgestrComponent', () => {
  let component: ModifrecgestrComponent;
  let fixture: ComponentFixture<ModifrecgestrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifrecgestrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifrecgestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
