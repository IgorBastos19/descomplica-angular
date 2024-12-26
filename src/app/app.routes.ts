import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Redireciona para 'home'
  { path: 'home', component: HomeComponent }, // Rota para 'home'
  { path: 'listar', component: ListarComponent }, // Rota para 'listar'
  { path: 'login', component: LoginComponent }, // Rota para 'login'
  { path: 'main', component: MainComponent }, // Rota para 'main'
  { path: 'cadastro', component: CadastroComponent }, // Rota para 'cadastro'
  { path: '**', redirectTo: 'home' }, // Redireciona rotas inválidas para 'home'
];
