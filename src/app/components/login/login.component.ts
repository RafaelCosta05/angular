import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from '../utilities/modal/modal.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ModalComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild(ModalComponent) modalComponent: ModalComponent | undefined;

  loginObj = {
    login: '',
    password: ''
  };

  registerObj = {
    username: '',
    email: '',
    nif: 0,
    password: '',
    password_confirmation: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.loginObj).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          const token = res.token;
          localStorage.setItem('authToken', token);

          // alert('Login sucesso');
          this.modalComponent?.showModal(
            'Success',
            'Login feito com sucesso'
          );

          this.modalComponent?.modalClosed.subscribe(() => {
            this.router.navigateByUrl('dashboard');
          });
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.modalComponent?.showModal(
            'Error',
            'Credenciais inválidas. Verifique o login e a senha!'
          );
        } else {
          this.modalComponent?.showModal(
            'Error',
            'Erro ao tentar logar: ' + err.message
          );
        }
      }
    });
  }

  register() {
    this.authService.register(this.registerObj).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          this.modalComponent?.modalClosed.subscribe(() => {
            location.reload();
          });
        }
      },
      error: (err) => {
        this.modalComponent?.showModal(
          'Error',
          'Erro ao tentar logar: ' + err.message
        );
      }
    });
  }
}
