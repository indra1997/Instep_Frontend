import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipformComponent } from './internshipform.component';

describe('InternshipformComponent', () => {
  let component: InternshipformComponent;
  let fixture: ComponentFixture<InternshipformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternshipformComponent]
    });
    fixture = TestBed.createComponent(InternshipformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
