import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectApprovalComponent } from './admin-project-approval.component';

describe('AdminProjectApprovalComponent', () => {
  let component: AdminProjectApprovalComponent;
  let fixture: ComponentFixture<AdminProjectApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProjectApprovalComponent]
    });
    fixture = TestBed.createComponent(AdminProjectApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
