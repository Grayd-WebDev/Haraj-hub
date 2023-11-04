import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUsersListContainerComponent } from '@org/users-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hh-page-home',
  standalone: true,
  imports: [CommonModule, FeatureUsersListContainerComponent, RouterModule],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHomeComponent {}