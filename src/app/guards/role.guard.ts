import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Verificar se estamos no navegador (cliente)
  if (isPlatformBrowser(platformId)) {
    // Garantir que `localStorage` só seja acessado no lado do cliente
    const userRole = window.localStorage.getItem('userRole');

    if (userRole === 'Admin') {
      return true;
    } else {
      router.navigate(['unauthorized']);
      return false;
    }
  } else {
    // Caso esteja no lado do servidor, só permita a navegação
    return true;
  }
};
