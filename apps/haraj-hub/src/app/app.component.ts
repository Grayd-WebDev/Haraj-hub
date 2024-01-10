import { LayoutComponent } from '@org/layout';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent, CommonModule],
  selector: 'hh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'haraj-hub';
}
