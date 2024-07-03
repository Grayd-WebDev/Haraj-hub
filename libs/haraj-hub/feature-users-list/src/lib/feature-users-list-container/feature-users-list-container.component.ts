import { Store, select } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureUsersListComponent } from '../feature-users-list/feature-users-list.component';
import { LetDirective } from '@ngrx/component';
import { addLike, deleteUser, initUsers, selectFilteredUsers} from '@org/users-data-access';
import { IUser } from '@org/data-access';

@Component({
  selector: 'hh-feature-users-list-container',
  standalone: true,
  imports: [CommonModule, FeatureUsersListComponent, LetDirective],
  templateUrl: './feature-users-list-container.component.html',
  styleUrls: ['./feature-users-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureUsersListContainerComponent{
  private readonly store = inject(Store);
  public users$ = this.store.pipe(select(selectFilteredUsers));
  
  onDeleteUser(userId:number){
    this.store.dispatch(deleteUser({userId}));
  }

  onLikeUser(userData: IUser): void{
    this.store.dispatch(addLike({userData}));
  }

  constructor(){
    this.store.dispatch(initUsers());
  }
}
