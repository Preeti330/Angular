import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageaplComponent } from './single-pageapl.component';

describe('SinglePageaplComponent', () => {
  let component: SinglePageaplComponent;
  let fixture: ComponentFixture<SinglePageaplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageaplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageaplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
