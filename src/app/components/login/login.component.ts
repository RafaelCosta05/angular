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
    email: '',
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
        } else if (res.status === 'error') {
          alert('Verifique as informações');
        }
      },
      error: (err) => {
        alert('Erro ao tentar logar: ' + err.message);
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }

}
