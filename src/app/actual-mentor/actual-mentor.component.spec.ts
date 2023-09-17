import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualMentorComponent } from './actual-mentor.component';

describe('ActualMentorComponent', () => {
  let component: ActualMentorComponent;
  let fixture: ComponentFixture<ActualMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualMentorComponent]
    });
    fixture = TestBed.createComponent(ActualMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
