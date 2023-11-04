import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureUsersSearchComponent } from './feature-users-search.component';

describe('FeatureUsersSearchComponent', () => {
  let component: FeatureUsersSearchComponent;
  let fixture: ComponentFixture<FeatureUsersSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUsersSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureUsersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
