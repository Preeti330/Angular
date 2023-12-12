import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbasicsComponent } from './angularbasics.component';

describe('AngularbasicsComponent', () => {
  let component: AngularbasicsComponent;
  let fixture: ComponentFixture<AngularbasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularbasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
