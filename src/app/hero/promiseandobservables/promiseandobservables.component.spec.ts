import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseandobservablesComponent } from './promiseandobservables.component';

describe('PromiseandobservablesComponent', () => {
  let component: PromiseandobservablesComponent;
  let fixture: ComponentFixture<PromiseandobservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseandobservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseandobservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
