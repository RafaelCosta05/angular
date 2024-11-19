import { Component, ViewChild } from '@angular/core';
import { TitlePageComponent } from '../../utilities/title-page/title-page.component';
import { ModalComponent } from '../../../utilities/modal/modal.component';
import { Router } from '@angular/router';
import { UsersService } from './../../../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'customers',
  standalone: true,
  imports: [
    CommonModule,
    TitlePageComponent,
    ModalComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  @ViewChild(ModalComponent) modalComponent: ModalComponent | undefined;

  users: any[] = [];

  constructor(
    private userService: UsersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.index().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (err: any) => {
        alert('erro' + err.message)
        this.modalComponent?.showModal(
          'Error',
          'Erro ao tentar carregar a lista de usuários'
        );
      }
    })
  }
}
