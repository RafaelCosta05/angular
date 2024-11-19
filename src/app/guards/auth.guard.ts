import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem('authToken');

    if (token) {
      return true;
    } else {
      router.navigate(['/login']);
      alert('Erro: utilizador não autenticado');
      return false;
    }
  } else {
    return true;
  }
};
