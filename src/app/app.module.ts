import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { LoginComponent } from './views/login.component';
import { SignInComponent } from './views/sign-in.component';
import { RegisterComponent } from './views/register.component';
import { CardListComponent } from './views/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    RegisterComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
