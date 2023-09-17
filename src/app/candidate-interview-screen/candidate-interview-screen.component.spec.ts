import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInterviewScreenComponent } from './candidate-interview-screen.component';

describe('CandidateInterviewScreenComponent', () => {
  let component: CandidateInterviewScreenComponent;
  let fixture: ComponentFixture<CandidateInterviewScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateInterviewScreenComponent]
    });
    fixture = TestBed.createComponent(CandidateInterviewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
