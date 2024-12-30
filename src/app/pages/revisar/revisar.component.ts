import { Component } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-revisar',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './revisar.component.html',
  styleUrl: './revisar.component.css',
})
export class RevisarComponent {
  user: User = new User();
  addressForm: any;

  constructor(private fb: FormBuilder) {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }

    this.addressForm = this.fb.group({
      identity: [this.user.identity, Validators.required],
      name: [this.user.name, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      phone: [this.user.phone, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ]),
      ],
      address: [this.user.address, Validators.required],
      address2: this.user.address2,
      city: [this.user.city, Validators.required],
      state: [this.user.state, Validators.required],
      postalCode: [
        this.user.postalCode,
        Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7),
        ]),
      ],
    });
  }

  hasUnitNumber = false;
  states = [
    { name: 'Acre', abbreviation: 'AC' },
    { name: 'Alagoas', abbreviation: 'AL' },
    { name: 'Amapá', abbreviation: 'AP' },
    { name: 'Amazonas', abbreviation: 'AM' },
    { name: 'Bahia', abbreviation: 'BA' },
    { name: 'Ceará', abbreviation: 'CE' },
    { name: 'Distrito Federal', abbreviation: 'DF' },
    { name: 'Espírito Santo', abbreviation: 'ES' },
    { name: 'Goiás', abbreviation: 'GO' },
    { name: 'Maranhão', abbreviation: 'MA' },
    { name: 'Mato Grosso', abbreviation: 'MT' },
    { name: 'Mato Grosso do Sul', abbreviation: 'MS' },
    { name: 'Minas Gerais', abbreviation: 'MG' },
    { name: 'Pará', abbreviation: 'PA' },
    { name: 'Paraíba', abbreviation: 'PB' },
    { name: 'Paraná', abbreviation: 'PR' },
    { name: 'Pernambuco', abbreviation: 'PE' },
    { name: 'Piauí', abbreviation: 'PI' },
    { name: 'Rio de Janeiro', abbreviation: 'RJ' },
    { name: 'Rio Grande do Norte', abbreviation: 'RN' },
    { name: 'Rio Grande do Sul', abbreviation: 'RS' },
    { name: 'Rondônia', abbreviation: 'RO' },
    { name: 'Roraima', abbreviation: 'RR' },
    { name: 'Santa Catarina', abbreviation: 'SC' },
    { name: 'São Paulo', abbreviation: 'SP' },
    { name: 'Sergipe', abbreviation: 'SE' },
    { name: 'Tocantins', abbreviation: 'TO' },
  ];

  onSubmit(): void {
    this.user.id = '1';
    if (this.addressForm.controls['identity'].value) {
      this.user.identity = this.addressForm.controls['identity'].value;
    }

    if (this.addressForm.controls['password'].value) {
      this.user.password = this.addressForm.controls['password'].value;
    }

    if (this.addressForm.controls['name'].value) {
      this.user.name = this.addressForm.controls['name'].value;
    }

    if (this.addressForm.controls['lastName'].value) {
      this.user.lastName = this.addressForm.controls['lastName'].value;
    }

    if (this.addressForm.controls['phone'].value) {
      this.user.phone = this.addressForm.controls['phone'].value;
    }

    if (this.addressForm.controls['email'].value) {
      this.user.email = this.addressForm.controls['email'].value;
    }

    if (this.addressForm.controls['address'].value) {
      this.user.address = this.addressForm.controls['address'].value;
    }

    if (this.addressForm.controls['address2'].value) {
      this.user.address2 = this.addressForm.controls['address2'].value;
    }

    if (this.addressForm.controls['city'].value) {
      this.user.city = this.addressForm.controls['city'].value;
    }

    if (this.addressForm.controls['state'].value) {
      this.user.state = this.addressForm.controls['state'].value;
    }

    if (this.addressForm.controls['postalCode'].value) {
      this.user.postalCode = this.addressForm.controls['postalCode'].value;
    }
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));

    alert('Your registration was received successfully, you can now log in!');
  }
}
