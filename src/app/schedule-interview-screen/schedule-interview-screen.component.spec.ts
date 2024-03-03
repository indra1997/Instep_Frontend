import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInterviewScreenComponent } from './schedule-interview-screen.component';

describe('ScheduleInterviewScreenComponent', () => {
  let component: ScheduleInterviewScreenComponent;
  let fixture: ComponentFixture<ScheduleInterviewScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleInterviewScreenComponent]
    });
    fixture = TestBed.createComponent(ScheduleInterviewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
