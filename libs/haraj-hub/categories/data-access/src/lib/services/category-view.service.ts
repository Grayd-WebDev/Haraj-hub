import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, switchMap } from 'rxjs';
import { CategoryVM } from '../+state/categories.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryViewService {
  private categories:CategoryVM[] = [];

  public hoveredCategoryId$ = new Subject<number>();
  public subcategories$ = new BehaviorSubject<CategoryVM[]>([]);

  private getSubcategoriesById(categories: CategoryVM[], categoryId: number): Observable<CategoryVM[]> {
    const category = categories.find((cat) => cat.id === categoryId);
    if (category && category.subcategories) {
      return of(category.subcategories);
    } else {
      return of([]);
    }
  }

  private setupHoveredCategoryIdSubscription() {
    this.hoveredCategoryId$
      .pipe(
        switchMap((categoryId) => this.getSubcategoriesById(this.categories, categoryId))
      )
      .subscribe((subcategories) => {
        this.subcategories$.next(subcategories);
      });
  }
  
  constructor() {
    this.setupHoveredCategoryIdSubscription();
  }
}
