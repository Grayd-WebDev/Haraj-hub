import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUsersListContainerComponent } from './feature-users-list-container.component';

describe('FeatureUsersListContainerComponent', () => {
  let component: FeatureUsersListContainerComponent;
  let fixture: ComponentFixture<FeatureUsersListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureUsersListContainerComponent]
    });
    fixture = TestBed.createComponent(FeatureUsersListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
