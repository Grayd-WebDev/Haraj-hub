import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'hh-add-favorite',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './add-favorite.component.html',
  styleUrl: './add-favorite.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFavoriteComponent {}
