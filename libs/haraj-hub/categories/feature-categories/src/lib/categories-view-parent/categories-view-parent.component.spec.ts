import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesViewParentComponent } from './categories-view-parent.component';

describe('CategoriesViewParentComponent', () => {
  let component: CategoriesViewParentComponent;
  let fixture: ComponentFixture<CategoriesViewParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesViewParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
