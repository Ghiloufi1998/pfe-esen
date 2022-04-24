import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcdefComponent } from './abcdef.component';

describe('AbcdefComponent', () => {
  let component: AbcdefComponent;
  let fixture: ComponentFixture<AbcdefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcdefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcdefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
