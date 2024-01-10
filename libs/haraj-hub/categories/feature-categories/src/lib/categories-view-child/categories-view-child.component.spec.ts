import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesViewChildComponent } from './categories-view-child.component';

describe('CategoriesViewChildComponent', () => {
  let component: CategoriesViewChildComponent;
  let fixture: ComponentFixture<CategoriesViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesViewChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
