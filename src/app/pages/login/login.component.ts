import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AutorizacaoService } from '../../services/autorizacao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private AutorizacaoService: AutorizacaoService) {}

  loginClick() {
    if (this.AutorizacaoService.obterLoginStatus())
      this.AutorizacaoService.deslogar();
    else this.AutorizacaoService.autorizar('token-example');
  }

  onSubmit(): void {
    this.loginClick();
    alert('Login successful!!');
  }

  email = this.addressForm.controls['email'];
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a <strong>validate</strong> email';
    }

    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }
}
