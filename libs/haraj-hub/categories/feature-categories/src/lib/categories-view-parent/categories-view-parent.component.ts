import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryVM } from '@org/hh-categories-data-access';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'hh-categories-view-parent',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './categories-view-parent.component.html',
  styleUrls: ['./categories-view-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesViewParentComponent {
  @Input({required:true}) category!: CategoryVM;
  @Output() categorySelectedEmitter = new EventEmitter();
  
  public isActive = false;
  onMouseOver(){
    this.isActive = true;
    this.categorySelected();
  }
  onMouseLeave(){
    this.isActive = false;
  }
  categorySelected(){
    this.categorySelectedEmitter.emit(this.category.id);
  }
} 
