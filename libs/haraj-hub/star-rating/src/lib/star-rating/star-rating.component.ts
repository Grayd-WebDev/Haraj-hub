import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hh-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
  @Input() ratingScore!:number;
  @Input() readOnly = false;

  Math = Math;

  public onRated = (starId: number) =>{
    if (this.readOnly)
      return;

    console.log("TO DO HANDLE RATING star id: "+ starId);
  }
}
