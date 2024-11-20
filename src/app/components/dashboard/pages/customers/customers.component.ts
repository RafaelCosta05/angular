import { Component } from '@angular/core';
import { ModalComponent } from '../../../utilities/modal/modal.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersService } from './../../../../services/users.service';

import { CardTableComponent } from '../../utilities/card-table/card-table.component';
import { TitlePageComponent } from '../../utilities/title-page/title-page.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'customers',
  standalone: true,
  imports: [
    CommonModule,
    TitlePageComponent,
    ModalComponent,
    CardTableComponent,
    DashboardComponent
],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  users: any[] = [];
  isLoading = true;

  constructor(
    private userService: UsersService,
    private router: Router,
    private dashboardComponent: DashboardComponent,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.index().subscribe({
      next: (data: any) => {
        setTimeout(() => {
          this.users = data;
          this.isLoading = false;
        }, 1500);
      },
      error: (err: any) => {
        alert('erro' + err.message)
        if(this.router.url.includes('/courts')) {
          this.dashboardComponent.showModal(
            'Error',
            'Erro ao tentar carregar a lista de usuários'
          );
        }
        this.isLoading = false;
      }
    })
  }
}
