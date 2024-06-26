import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryVM } from '@org/hh-categories-data-access';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hh-categories-view-child',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './categories-view-child.component.html',
  styleUrls: ['./categories-view-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesViewChildComponent{
  @Input({required: true}) category!:CategoryVM;
}
