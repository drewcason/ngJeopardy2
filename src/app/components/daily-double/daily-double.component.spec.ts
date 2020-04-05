import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDoubleComponent } from './daily-double.component';

describe('DailyDoubleComponent', () => {
  let component: DailyDoubleComponent;
  let fixture: ComponentFixture<DailyDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
