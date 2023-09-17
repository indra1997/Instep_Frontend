import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjectScreenComponent } from './search-project-screen.component';

describe('SearchProjectScreenComponent', () => {
  let component: SearchProjectScreenComponent;
  let fixture: ComponentFixture<SearchProjectScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProjectScreenComponent]
    });
    fixture = TestBed.createComponent(SearchProjectScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
