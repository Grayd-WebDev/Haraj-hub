import { BehaviorSubject } from 'rxjs';
import { ProductsFacade } from './../../../../products/data-access/src/lib/+state/products.facade';
import { ChangeDetectionStrategy, Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'hh-like-dislike',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeDislikeComponent implements OnInit{
  @Input() id!: number;

  private productsFacade = inject(ProductsFacade);
  public buttonsDisabled$ = new BehaviorSubject<boolean>(false);
  
  public handleLiked = () => {
    if (this.buttonsDisabled$.value) {
      return;
    }
    this.buttonsDisabled$.next(true);
    this.productsFacade.likeProduct(this.id);
  }
  
  public handleDisliked = () => {
    if (this.buttonsDisabled$.value) {
      return;
    } 
    this.buttonsDisabled$.next(true);
    this.productsFacade.dislikeProduct(this.id);
  }
  
  // constructor(){
  //   console.log("LD-Reinstantiated");
    
  // }

  ngOnInit(): void {
    console.log("LD-Reinstantiated");

      this.buttonsDisabled$.subscribe((v)=>{
        console.log(v);
      })
  }
}
