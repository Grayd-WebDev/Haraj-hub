import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subscription, map, take, takeWhile, tap, timer} from 'rxjs';
@Component({
  selector: 'hh-feature-timer',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatIconModule],
  templateUrl: './feature-timer.component.html',
  styleUrls: ['./feature-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTimerComponent implements OnDestroy {
  countdownTime: number;
  countdownInProgress = false;
  remainingTime?: Observable<string>;
  private countdownSubscription?: Subscription;
  private _snackBar = inject(MatSnackBar);
  public paused = false;
  private remainingTimeWhenPaused: number | undefined;
  constructor() {
    this.countdownTime = 2; 
  }

  startCountdown() {
    if (this.countdownTime < 2) {
      return;
    }

    this.countdownInProgress = true;
    const endTime = new Date();
    if(this.remainingTimeWhenPaused) {
      const remainedPSeconds = new Date(this.remainingTimeWhenPaused*1000).getSeconds();
      endTime.setSeconds(remainedPSeconds);
    }else{
      endTime.setSeconds(endTime.getSeconds() + this.countdownTime);
    }

    const currentTime$ = timer(0, 1000).pipe(
      takeWhile(() => this.countdownInProgress),
      map(() => {
        const currentTime = new Date();
        const timeDifference = endTime.getTime() - currentTime.getTime();
        return timeDifference <= 0 ? 0 : timeDifference;
      })
    );

   this.remainingTime = currentTime$.pipe(
     takeWhile((timeDifference) => timeDifference > 0),
     tap((timeDifference) => {
       if (!this.paused) {
         this.remainingTimeWhenPaused = timeDifference;
       }
     }),
     map((timeDifference) => (this.paused ? this.remainingTimeWhenPaused! : timeDifference)),
     map((timeDifference) => this.formatTime(timeDifference))
   );

  }

  
  // pauseCountdown() {
  //   const remainingTime$ = timer(0,1000).pipe(
  //     takeWhile(()=>this.paused),
  //     map(()=>{
  //       const currentTime = new Date();
  //       const timeDifference = endTime.getTime() - currentTime.getTime();
  //       return timeDifference <= 0 ? 0 : timeDifference;
  //     })
  //   );
  // }

  formatTime(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes} minutes and ${seconds} seconds`;
  }

  togglePaused() {
    this.paused = !this.paused;

    if (this.paused) {
      if (this.countdownSubscription) {
        this.countdownSubscription.unsubscribe();
      }
    } else {
      this.startCountdown();
    }
  }

  stopCountdown() {
    this.countdownInProgress = false;
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  openSnackBar() {
    this._snackBar.open('Pizza party', 'Dismiss', {
      duration: 3000,
    });
  }

  ngOnDestroy() {
    this.stopCountdown();
  }
}