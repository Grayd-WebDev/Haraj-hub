import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hh-page-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-profile.component.html',
  styleUrl: './page-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProfileComponent {}
