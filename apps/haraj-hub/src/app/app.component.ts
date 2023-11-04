import { LayoutComponent } from './../../../../libs/haraj-hub/core/ui/layout/src/lib/layout/layout.component';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'hh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'haraj-hub';
}
