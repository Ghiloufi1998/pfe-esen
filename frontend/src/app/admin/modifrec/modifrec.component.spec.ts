import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifrecComponent } from './modifrec.component';

describe('ModifrecComponent', () => {
  let component: ModifrecComponent;
  let fixture: ComponentFixture<ModifrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
