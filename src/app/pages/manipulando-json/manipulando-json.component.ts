import { Component } from '@angular/core';
import studentsData from '../../students.json';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
  phone: String;
}

@Component({
  selector: 'app-manipulando-json',
  imports: [CommonModule],
  templateUrl: './manipulando-json.component.html',
  styleUrl: './manipulando-json.component.css',
})
export class ManipulandoJsonComponent {
  students: Student[] = studentsData;
  constructor(private router: Router) {}
  goToDetail(students: Student) {
    this.router.navigate(['detalhe', students.id, students.phone]);
  }
}
