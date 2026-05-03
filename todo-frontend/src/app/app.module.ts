import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Peça para o formulário funcionar
import { HttpClientModule } from '@angular/common/http'; // Peça para a internet funcionar

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,       // Adicionamos aqui
    HttpClientModule   // Adicionamos aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }