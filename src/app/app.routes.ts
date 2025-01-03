import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MainComponent } from './pages/main/main.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { Page1Component } from './pages/sub-route/page1/page1.component';
import { Page2Component } from './pages/sub-route/page2/page2.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { autorizadoGuard } from './guards/autorizado.guard';
import { DetalheComponent } from './pages/detalhe-component/detalhe-component.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';
import { RevisarComponent } from './pages/revisar/revisar.component';
import { ListaTesteComponent } from './pages/lista-teste/lista-teste.component';
import { DashComponent } from './pages/dash/dash.component';
import { TreeComponent } from './pages/tree/tree.component';
import { DragComponent } from './pages/drag/drag.component';
import { ModalComponent } from './pages/modal/modal.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Redireciona para 'home'
  { path: 'home', component: HomeComponent }, // Rota para 'home'
  { path: 'listar', component: ListarComponent }, // Rota para 'listar'
  { path: 'login', component: LoginComponent }, // Rota para 'login'
  { path: 'main', component: MainComponent }, // Rota para 'main'
  { path: 'cadastro', component: CadastroComponent }, // Rota para 'cadastro'
  { path: 'revisar', component: RevisarComponent },
  { path: 'lista-simples', component: ListaSimplesComponent },
  { path: 'lista-teste', component: ListaTesteComponent },
  { path: 'dash', component: DashComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'drag', component: DragComponent },
  { path: 'modal', component: ModalComponent },

  { path: 'json', component: ManipulandoJsonComponent },
  {
    path: 'subroute',
    component: SubRouteComponent,
    children: [
      { path: 'page1', component: Page1Component }, // Rota filha para 'subroute'
      { path: 'page2', component: Page2Component }, // Rota filha para 'subroute'
    ],
  },

  {
    path: 'privado',
    component: PrivadoComponent,
    canActivate: [autorizadoGuard],
  },
  { path: 'detalhe/:id/:phone', component: DetalheComponent },
];
