import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatTableModule,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { ListarItem } from './listar-datasource';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, CommonModule],
})
export class ListarComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<User>;
  dataSource = new MatTableDataSource<User>([]);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'phone'];

  constructor(private router: Router, public service: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.service.getUsers().subscribe({
      next: (response) => {
        console.log('Usuários carregados:', response);
        this.dataSource = new MatTableDataSource<User>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (erro: any) => {
        console.error('Erro ao carregar usuários:', erro);
      },
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
