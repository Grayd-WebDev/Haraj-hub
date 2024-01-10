import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoriesViewComponent } from '../categories-view/categories-view.component';
import { CategoriesFacade } from '@org/hh-categories-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'hh-categories-view-container',
  standalone: true,
  imports: [CommonModule,  MatButtonModule, MatMenuModule, MatIconModule, CategoriesViewComponent, LetDirective],
  templateUrl: './categories-view-container.component.html',
  styleUrls: ['./categories-view-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesViewContainerComponent {
  private categoriesFacade = inject(CategoriesFacade);
  public categories$ = this.categoriesFacade.allCategories$;
  public categoriesLoaded$ = this.categoriesFacade.loaded$;
  
  public onOpenCategories(){
    this.categoriesFacade.init();
  }
}
