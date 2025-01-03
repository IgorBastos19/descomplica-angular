import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user';
import { NgxMaskDirective } from 'ngx-mask';
import { GenericValidador } from '../../comum/Validador';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    CommonModule,
    MatDatepickerModule,
  ],
})
export class CadastroComponent {
  user: User = new User();
  nextId: number = 5;
  private fb = inject(FormBuilder);
  private service = inject(UserService);
  addressForm = this.fb.group({
    identity: [
      null,
      Validators.compose([Validators.required, GenericValidador.isValidCpf()]),
    ],
    name: [null, Validators.required],
    lastName: [null, Validators.required],
    nascimento: [null, Validators.required],
    phone: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
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
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
      ]),
    ],
  });

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
    this.nextId.toString();
    this.nextId++;
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

    this.service.addUser(this.user).subscribe({
      next: (response) => {
        console.log(response);
        alert('Your registration was successfully');
      },
      error: (error: any) => {
        console.error(error);
        alert('An error occurred while registering');
      },
    });
  }
}
