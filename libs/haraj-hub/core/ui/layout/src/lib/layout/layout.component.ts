import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainSidebarComponent } from '../main-sidebar/main-sidebar.component';

@Component({
  selector: 'hh-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent, MainSidebarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {}
