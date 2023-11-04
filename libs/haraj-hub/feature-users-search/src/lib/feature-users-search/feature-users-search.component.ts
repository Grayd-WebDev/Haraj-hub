import { selectSearchFilter, updateSearchFilter } from '@org/users-data-access';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'hh-feature-users-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule],
  templateUrl: './feature-users-search.component.html',
  styleUrls: ['./feature-users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureUsersSearchComponent implements OnInit{
  private store = inject(Store);
  public searchInput = new FormControl('');
  
  public clearSearchFilter(){
    this.searchInput.setValue("");
  }

  ngOnInit(){
    this.searchInput.valueChanges.subscribe((data)=>{
      this.store.dispatch(updateSearchFilter({searchFilter: data}));
    });
  }
}