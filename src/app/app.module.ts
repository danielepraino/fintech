import { TruncatePipe } from './pipes/truncate.pipe';
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
import { CardFormComponent } from './views/card-form.component';
import { CardsComponent } from './views/cards.component';
import { MovementComponent } from './views/movement.component';
import { MovementsComponent } from './views/movements.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    RegisterComponent,
    CardListComponent,
    CardFormComponent,
    CardsComponent,
    MovementComponent,
    MovementsComponent,
    TruncatePipe,
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
