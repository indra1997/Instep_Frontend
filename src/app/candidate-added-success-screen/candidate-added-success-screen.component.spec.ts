import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAddedSuccessScreenComponent } from './candidate-added-success-screen.component';

describe('CandidateAddedSuccessScreenComponent', () => {
  let component: CandidateAddedSuccessScreenComponent;
  let fixture: ComponentFixture<CandidateAddedSuccessScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateAddedSuccessScreenComponent]
    });
    fixture = TestBed.createComponent(CandidateAddedSuccessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
