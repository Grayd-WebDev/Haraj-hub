import { ChangeDetectionStrategy, Component, Input, OnInit, OnChanges, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryVM } from '@org/hh-categories-data-access';
import { CategoriesViewParentComponent } from '../categories-view-parent/categories-view-parent.component';
import { CategoriesViewChildComponent } from '../categories-view-child/categories-view-child.component';
import { BehaviorSubject, Observable, Subject, of, switchMap } from "rxjs";
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'hh-categories-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule, LetDirective, MatMenuModule, MatIconModule, CategoriesViewParentComponent, CategoriesViewChildComponent],
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesViewComponent{
  @Input({required:true}) categories!: CategoryVM[];
  @Input({required:true}) categoriesLoaded?: boolean;
  private hoveredCategoryId$ = new Subject<number>();
  public hoveredCategory$ = new BehaviorSubject<CategoryVM>({} as CategoryVM);

  private getSubcategoryById(categories: CategoryVM[], categoryId: number): Observable<CategoryVM> {
    const category = categories.find((cat) => cat.id === categoryId);
    if (category && category.subcategories) {
      return of(category);
    } else {
      return of({} as CategoryVM);
    }
  }
   
  private setupHoveredCategoryIdSubscription() {
    this.hoveredCategoryId$
      .pipe(
        switchMap((categoryId) => this.getSubcategoryById(this.categories, categoryId))
      )
      .subscribe((hoveredCategory) => {
        this.hoveredCategory$.next(hoveredCategory);
      });
  }

  handleEmitter(categoryId: number){
    this.hoveredCategoryId$.next(categoryId);
  }
  
  ngOnDestroy() {
    this.hoveredCategoryId$.complete();
    this.hoveredCategory$.complete();
  }

  constructor() {
    this.setupHoveredCategoryIdSubscription();
  }
}