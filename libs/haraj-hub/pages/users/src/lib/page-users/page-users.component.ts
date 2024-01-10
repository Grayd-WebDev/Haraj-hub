import { FeatureUsersListContainerComponent } from '@org/users-list';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUsersSearchComponent } from '@org/feature-users-search';
import { CategoriesViewContainerComponent } from '@org/feature-categories';
import { FeatureTimerComponent } from '@org/feature-timer';
@Component({
  selector: 'hh-page-users',
  standalone: true,
  imports: [CommonModule, FeatureUsersListContainerComponent, FeatureUsersSearchComponent, FeatureTimerComponent, CategoriesViewContainerComponent],
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageUsersComponent {}
