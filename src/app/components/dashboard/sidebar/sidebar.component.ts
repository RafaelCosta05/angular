import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinksSidebarComponent } from '../utilities/links-sidebar/links-sidebar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    CommonModule,
    LinksSidebarComponent,
    DashboardComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(
    private dashboardComponent: DashboardComponent,
    private authService: AuthService,
    private router: Router,
  ) { }

  logout() {
    this.authService.logout().subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          localStorage.clear();
          this.dashboardComponent.showModal('Success', res.message);

          if (this.dashboardComponent.modalComponent) {
            const subscription = this.dashboardComponent.modalComponent.modalClosed.subscribe(() => {
              this.router.navigate(['']);
              subscription.unsubscribe();
            });
          }
        }
      },
      error: (err: any) => {
        this.dashboardComponent.showModal(
          'Error',
          err.message
        );
      }
    });
  }
}
