import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalJeopardyComponent } from './final-jeopardy.component';

describe('FinalJeopardyComponent', () => {
  let component: FinalJeopardyComponent;
  let fixture: ComponentFixture<FinalJeopardyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalJeopardyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalJeopardyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
