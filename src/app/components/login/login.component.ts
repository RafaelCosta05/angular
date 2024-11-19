import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
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
    private router:Router
  ) {}

  login() {
    this.authService.login(this.loginObj).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          alert('Login sucesso');
          this.router.navigateByUrl("dashboard");
        }
      },
      error: (err) => {
        if (err.status === 401) {
          alert('Credenciais inválidas. Verifique o login e a senha.');
        } else {
          alert('Erro ao tentar logar: ' + err.message);
        }
      }
    });
  }

  register() {
    this.authService.register(this.registerObj).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          alert('Conta criada com sucesso');
          location.reload();
        }
      },
      error: (err) => {
          alert('Erro de validação: ' + err.error.details);
      }
    });
  }
}
