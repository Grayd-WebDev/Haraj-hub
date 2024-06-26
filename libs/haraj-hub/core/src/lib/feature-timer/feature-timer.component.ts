import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, Observable, Subscription, interval, map, take, takeWhile, tap, timer} from 'rxjs';

@Component({
  selector: 'hh-feature-timer',
  template: `
    <div>
      <p>{{(countdownTimeObs$ | async)}}</p>
      <button (click)="togglePaused()">{{ paused ? 'Resume' : 'Pause' }}</button>
    </div>
  `,
  imports: [CommonModule,MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatIconModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureTimerComponent implements OnDestroy {
  remainingTime = '';
  paused = false;
  private countdownSubscription?: Subscription;
  private countdownTime = new BehaviorSubject(120); // Countdown time in seconds
  public countdownTimeObs$ = this.countdownTime.asObservable(); // Countdown time in seconds

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    this.countdownSubscription = interval(1000).subscribe(() => {
      if (!this.paused) {
        this.countdownTime.next(this.countdownTime.getValue()-1);
        this.remainingTime = this.formatTime(this.countdownTime.getValue());
        if (this.countdownTime.getValue() <= 0) {
          this.stopCountdown();
        }
      }
    });
  }

  stopCountdown() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  togglePaused() {
    this.paused = !this.paused;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minutes and ${remainingSeconds} seconds`;
  }
}
