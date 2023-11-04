import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureUsersListComponent } from './feature-users-list.component';

describe('FeatureUsersListComponent', () => {
  let component: FeatureUsersListComponent;
  let fixture: ComponentFixture<FeatureUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUsersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
