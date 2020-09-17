import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerClimaComponent } from './componentes/ver-clima/ver-clima.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { ModalClimaComponent } from './componentes/modal-clima/modal-clima.component';


@NgModule({
  declarations: [
    AppComponent,
    VerClimaComponent,
    ModalClimaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
