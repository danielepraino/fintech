import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register.component';
import { SignInComponent } from './components/sign-in.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    LoginRoutingModule
  ],
})
export class LoginModule { }
