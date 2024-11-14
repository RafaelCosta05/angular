import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    RouterOutlet,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    constructor(private router: Router) {}
}
