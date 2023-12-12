import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTempleteComponent } from './excel-templete.component';

describe('ExcelTempleteComponent', () => {
  let component: ExcelTempleteComponent;
  let fixture: ComponentFixture<ExcelTempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelTempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
