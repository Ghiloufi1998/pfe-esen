import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcmptComponent } from './modifcmpt.component';

describe('ModifcmptComponent', () => {
  let component: ModifcmptComponent;
  let fixture: ComponentFixture<ModifcmptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifcmptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifcmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
