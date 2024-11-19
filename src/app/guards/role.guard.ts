import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userRole = localStorage.getItem('userRole');

  if (userRole === 'Admin') {
    return true;
  } else {
    router.navigate(['unauthorized']);
    return false;
  }
};
