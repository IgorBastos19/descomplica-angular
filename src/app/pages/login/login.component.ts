import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AutorizacaoService } from '../../services/autorizacao.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  constructor(
    private AutorizacaoService: AutorizacaoService,
    private service: UserService,
    private router: Router
  ) {}

  loginClick() {
    if (this.AutorizacaoService.obterLoginStatus())
      this.AutorizacaoService.deslogar();
    else this.AutorizacaoService.autorizar('token-example');
  }

  onSubmit(): void {
    if (this.AutorizacaoService.obterLoginStatus())
      this.AutorizacaoService.deslogar();
    //this.AutorizacaoService.autorizar('token-example');
    else
      this.service.login(this.addressForm.value).subscribe({
        next: (response) => {
          console.log(response.idToken);
          if (response.idToken)
            this.AutorizacaoService.autorizar(response.idToken);
          this.router.navigate(['/usuario']);
          alert('Login efetuado com sucesso');
        },
        error: (err) => {
          console.error(err);
        },
      });
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
