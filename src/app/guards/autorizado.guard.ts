import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutorizacaoService } from '../services/autorizacao.service';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const autorizadoService = inject(AutorizacaoService);
  const routerService = inject(Router);

  const usuarioEstaLogado = autorizadoService.obterLoginStatus();
  if (usuarioEstaLogado) {
    return true;
  }

  routerService.navigate(['/login']);
  return false;
};
