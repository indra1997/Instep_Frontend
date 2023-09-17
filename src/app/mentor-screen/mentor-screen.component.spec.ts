import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorScreenComponent } from './mentor-screen.component';

describe('MentorScreenComponent', () => {
  let component: MentorScreenComponent;
  let fixture: ComponentFixture<MentorScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorScreenComponent]
    });
    fixture = TestBed.createComponent(MentorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
