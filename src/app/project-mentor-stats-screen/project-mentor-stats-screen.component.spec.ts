import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMentorStatsScreenComponent } from './project-mentor-stats-screen.component';

describe('ProjectMentorStatsScreenComponent', () => {
  let component: ProjectMentorStatsScreenComponent;
  let fixture: ComponentFixture<ProjectMentorStatsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMentorStatsScreenComponent]
    });
    fixture = TestBed.createComponent(ProjectMentorStatsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
