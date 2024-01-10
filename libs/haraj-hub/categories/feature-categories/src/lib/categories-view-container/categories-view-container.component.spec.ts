import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesViewContainerComponent } from './categories-view-container.component';

describe('CategoriesViewContainerComponent', () => {
  let component: CategoriesViewContainerComponent;
  let fixture: ComponentFixture<CategoriesViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesViewContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
