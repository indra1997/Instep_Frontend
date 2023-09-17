import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewAddProjectComponent } from './dialog-overview-add-project.component';

describe('DialogOverviewAddProjectComponent', () => {
  let component: DialogOverviewAddProjectComponent;
  let fixture: ComponentFixture<DialogOverviewAddProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogOverviewAddProjectComponent]
    });
    fixture = TestBed.createComponent(DialogOverviewAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
