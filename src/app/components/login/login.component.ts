import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  loginObj = {
    login: 'SuperAdmin',
    password: 'Az123456!'
  };

  registerObj = {
    username: '',
    email: '',
    nif: '',
    password: ''
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

  // register() {
  //   this.authService.register() {

  //   }
  // }

}
