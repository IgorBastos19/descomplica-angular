import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-lista-simples',
  templateUrl: './lista-simples.component.html',
  styleUrls: ['./lista-simples.component.css'],
  imports: [CommonModule],
})
export class ListaSimplesComponent {
  users: User[] = []; // Array de usuários

  constructor(private router: Router, public service: UserService) {}

  ngOnInit(): void {
    this.getUsers(); // Carrega os usuários ao inicializar
  }

  // Método para buscar os usuários
  getUsers(): void {
    this.service.getUsers().subscribe({
      next: (response) => {
        console.log('Usuários carregados:', response);
        this.users = response;
      },
      error: (erro: any) => {
        console.error('Erro ao carregar usuários:', erro);
      },
    });
  }

  // Método para redirecionar para os detalhes do usuário
  goToDetail(user: User) {
    // Certifique-se de que a rota 'detalhe/:id/:phone' está configurada
    this.router.navigate(['detalhe', user.id, user.phone]);
  }
}
