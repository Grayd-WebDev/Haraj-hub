import { IUser } from '@org/data-access';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'hh-feature-users-list',
  standalone: true,
  imports: [CommonModule, LetDirective, MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './feature-users-list.component.html',
  styleUrls: ['./feature-users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureUsersListComponent {
  @Input({required: true}) users: IUser[] = [];
  @Output() deleteUser = new EventEmitter<number>();
  @Output() likeUser = new EventEmitter<IUser>();

  onDeleteUser(id:number){
    this.deleteUser.emit(id);
  }
  onLikeUser(userData:IUser){
    this.likeUser.emit(userData);
  }
}
