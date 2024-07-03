import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUsersListContainerComponent } from '@org/users-list';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hh-page-home',
  standalone: true,
  imports: [CommonModule, FeatureUsersListContainerComponent, RouterModule],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHomeComponent {}