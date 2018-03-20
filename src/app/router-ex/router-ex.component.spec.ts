import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterExComponent } from './router-ex.component';

describe('RouterExComponent', () => {
  let component: RouterExComponent;
  let fixture: ComponentFixture<RouterExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
