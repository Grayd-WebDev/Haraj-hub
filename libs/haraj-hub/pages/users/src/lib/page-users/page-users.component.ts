import { FeatureUsersListContainerComponent } from '@org/users-list';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUsersSearchComponent } from '@org/feature-users-search';

@Component({
  selector: 'org-page-users',
  standalone: true,
  imports: [CommonModule, FeatureUsersListContainerComponent, FeatureUsersSearchComponent],
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageUsersComponent {}
